import { useState } from "react";
import { useForm } from "react-hook-form";
import { Document, Outline, Page, pdfjs } from "react-pdf";
import ReactSignatureCanvas from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type FormData = {
  file: Array<File> | undefined;
};

const ESign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [numPages, numPagesSetter] = useState<number | null>(null);
  const [pageNumber, pageNumberSetter] = useState<number>(1);
  const [file, fileSetter] = useState<File | undefined>(undefined);
  const [trimmedDataURL, trimmedDataURLSetter] = useState<string | undefined>(
    undefined
  );

  const onSubmit = handleSubmit((data: FormData) => {
    // alert(`Data ready:\n${JSON.stringify(data, null, 4)}`);
    fileSetter(data.file?.[0]);
  });

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    numPagesSetter(numPages);
  }
  const onDocumentItemClick = ({ pageNumber }: { pageNumber: string }) =>
    console.log("Clicked an item from page " + pageNumber + "!");
  let sigCanvas: ReactSignatureCanvas | null = null;
  const clear = () => {
    sigCanvas?.clear();
  };

  const trim = () => {
    trimmedDataURLSetter(sigCanvas?.getTrimmedCanvas().toDataURL("image/png"));
  };
  return (
    <div className="bg-home-page bg-no-repeat bg-cover min-h-screen pt-16">
      <div className="flex justify-center">
        <div className="w-96 p-4">
          <form onSubmit={onSubmit}>
            <div className="">
              <input
                type="file"
                {...register("file", { required: true })}
                className="w-full border-b border-gray-400"
              />
              {errors.file && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed px-6 py-2"
            >
              Buka
            </button>
            <button
              type="button"
              className="bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed px-6 py-2"
              onClick={() => fileSetter(undefined)}
            >
              Bersihkan
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          {file !== undefined ? (
            <>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <button
                className="bg-gray-300 disabled:bg-gray-400 px-4 py-2"
                disabled={pageNumber === 1}
                onClick={() => pageNumberSetter(pageNumber - 1)}
              >
                prev
              </button>
              <button
                className="bg-gray-300 disabled:bg-gray-400 px-4 py-2"
                disabled={numPages === pageNumber}
                onClick={() => pageNumberSetter(pageNumber + 1)}
              >
                next
              </button>
            </>
          ) : (
            <></>
          )}
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode="canvas"
            externalLinkTarget="_blank"
          >
            <Outline onItemClick={onDocumentItemClick} />
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      {file !== undefined ? (
        <div className="mt-10 flex justify-center">
          <div className="">
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
              backgroundColor="rgba(255,255,255,1)"
              ref={(ref) => {
                sigCanvas = ref;
              }}
            />
            <div>
              <button className="bg-gray-300 px-4 py-2" onClick={clear}>
                Clear
              </button>
              <button className="bg-gray-300 px-4 py-2" onClick={trim}>
                Trim
              </button>
            </div>
            {trimmedDataURL ? (
              <img className="" src={trimmedDataURL} alt="" />
            ) : null}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ESign;
