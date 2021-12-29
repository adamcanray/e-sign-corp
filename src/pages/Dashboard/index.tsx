import { useEffect } from "react";
import { findSum } from "../../core/utils";

const Dashboard = () => {
  const arr1 = [1, 2, 3, 4];
  const sum_target_1 = 5;
  const arr2 = [1, -1, 2, -2];
  const sum_target_2 = 1;
  useEffect(() => {
    console.log(findSum(arr1, sum_target_1));
    console.log(findSum(arr2, sum_target_2));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="bg-home-page bg-no-repeat bg-cover min-h-screen pt-16">
      <div className="flex items-center justify-center min-h-screen">
        <div className="">
          <div className="bg-white p-10 space-y-10">
            <p className="text-xl text-gray-800 font-bold">
              <span className="bg-cyan-200">findSum()</span> function
              implementation:
              <p className="text-sm text-yellow-500 font-medium">
                You can also check{" "}
                <span className="font-bold underline">browsers console</span>{" "}
                for the result
              </p>
            </p>
            <p className="text-xl text-gray-700 border border-pink-500 p-4">
              <div className="font-bold">case 1</div>
              <br />
              arr = {JSON.stringify(arr1, null, 4)}
              <br />
              sum = {sum_target_1}
              <br />
              <span className="text-green-500">
                result = {JSON.stringify(findSum(arr1, sum_target_1), null, 4)}
              </span>
            </p>
            <p className="text-xl text-gray-700 border border-pink-500 p-4">
              <div className="font-bold">case 2</div>
              <br />
              arr = {JSON.stringify(arr2, null, 4)}
              <br />
              sum = {sum_target_2}
              <br />
              <span className="text-green-500">
                result = {JSON.stringify(findSum(arr2, sum_target_2), null, 4)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
