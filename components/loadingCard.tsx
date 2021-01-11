import * as React from "react";

const LoadingCard: React.FC = () => {
  return (
    <div className={"w-full sm:w-1/4 mb-4 px-2"}>
      <div className={"bg-white shadow-lg hover:shadow rounded-md h-72 p-6"}>
        <div className="flex justify-between mb-3">
          <div className="animate-pulse bg-gray-300">
            <p className={"text-white text-opacity-0 text-xl"}>カレーライス</p>
          </div>
          <div className="animate-pulse bg-gray-300">
            <p className={"text-white text-opacity-0 text-xl"}>2020/01/01</p>
          </div>
        </div>
        <div className={"w-full h-5/6 bg-gray-300 animate-pulse"}></div>
      </div>
    </div>
  );
};

export default LoadingCard;
