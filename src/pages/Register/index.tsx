import { useForm } from "react-hook-form";
type FormData = {
  firstName: string;
  emailAddress: string;
  password: string;
  termsAndConditions: boolean;
};
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) =>
    alert(`Data ready:\n${JSON.stringify(data, null, 4)}`)
  );
  return (
    <div className="bg-home-page bg-no-repeat bg-cover min-h-screen pt-16">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-4/5 bg-white rounded-lg shadow-lg px-4 md:px-20">
          <div className="py-10">
            <p className="text-center text-gray-700 text-3xl font-light">
              Register
            </p>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-10">
              <div className="col-span-6 space-y-8 px-4 py-12">
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    <span className="text-xl text-gray-700 font-light">
                      Marketing
                    </span>
                  </div>
                  <div className="ml-10">
                    <p className="text-sm text-gray-400 xl:pr-24">
                      We've create the marketing campaign of the website. It was
                      a very interesting collaboration.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-fuchsia-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <span className="text-xl text-gray-700 font-light">
                      Fully Coded in HTML5
                    </span>
                  </div>
                  <div className="ml-10">
                    <p className="text-sm text-gray-400 xl:pr-24">
                      We've developed the website with HTML5 and CSS3. The
                      client has access to the code using Github.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-xl text-gray-700 font-light">
                      Built Audience
                    </span>
                  </div>
                  <div className="ml-10">
                    <p className="text-sm text-gray-400 xl:pr-24">
                      There is also a Fully Customizable CMS Admin Dashboard for
                      this product.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex justify-center items-center px-4 py-10">
                  <div className="space-y-4">
                    <ul className="flex items-center justify-center space-x-2">
                      <li>
                        <a
                          className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-blue-500 text-white text-2xl hover:bg-blue-600"
                          href="http://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-cyan-500 text-white text-2xl hover:bg-cyan-600"
                          href="http://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-red-500 text-white text-32l hover:bg-red-600"
                          href="http://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                    </ul>
                    <p className="text-center text-gray-500">or be classical</p>
                  </div>
                </div>
                <form onSubmit={onSubmit} className="mt-2 space-y-6 px-4">
                  <label className="flex items-center space-x-3">
                    <span className="w-8 text-2xl text-gray-500 text-center">
                      <i className="fa fa-smile-o" />
                    </span>
                    <div className="flex-1 flex flex-col space-y-2">
                      <input
                        type="text"
                        {...register("firstName", { required: true })}
                        placeholder="First Name"
                        className=" py-2 border-b border-gray-300 hover:border-fuchsia-500 focus:border-fuchsia-500 text-gray-300 outline-0"
                      />
                      {errors.firstName && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </label>
                  <label className="flex items-center space-x-3">
                    <span className="w-8 text-2xl text-gray-500 text-center">
                      <i className="fa fa-envelope" />
                    </span>
                    <div className="flex-1 flex flex-col space-y-2">
                      <input
                        type="email"
                        {...register("emailAddress", { required: true })}
                        placeholder="Email Address"
                        className=" py-2 border-b border-gray-300 hover:border-fuchsia-500 focus:border-fuchsia-500 text-gray-300 outline-0"
                      />
                      {errors.emailAddress && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </label>
                  <label className="flex items-center space-x-3">
                    <span className="w-8 text-2xl text-gray-500 text-center">
                      <i className="fa fa-lock" />
                    </span>
                    <div className="flex-1 flex flex-col space-y-2">
                      <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Password"
                        className=" py-2 border-b border-gray-300 hover:border-fuchsia-500 focus:border-fuchsia-500 text-gray-300 outline-0"
                      />
                      {errors.password && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </label>
                  <div className="flex items-start space-x-3">
                    <span className="w-8 text-2xl text-gray-500 text-center">
                      <input
                        type="checkbox"
                        {...register("termsAndConditions", { required: true })}
                        className="form-checkbox rounded text-fuchsia-500 focus:ring-fuchsia-400"
                      />
                    </span>
                    <div className="flex-1 flex flex-col space-y-2">
                      <p className="text-gray-400 mt-1">
                        {" "}
                        I agree to the{" "}
                        <a
                          href="http://blabla.com/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fuchsia-500 hover:underline font-semibold"
                        >
                          terms and conditions
                        </a>
                      </p>
                      {errors.termsAndConditions && (
                        <span className="text-sm text-red-500">
                          Please agree terms and conditions
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 text-white bg-fuchsia-500 hover:bg-fuchsia-600 rounded-full font-light"
                    >
                      GET STARTED
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
