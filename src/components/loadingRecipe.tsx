import * as React from "react";

const LoadingRecipe: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-mono text-gray-600">料理の詳細</h1>
      <div className={"mt-6"}>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">料理名</label>
          <div className={"animate-pulse bg-gray-300"}>
            <p className={"text-white text-opacity-0 text-xl"}>カレーライス</p>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">
            レシピURL
          </label>
          <div className={"animate-pulse bg-gray-300"}>
            <a
              target="blank"
              className={"text-white text-opacity-0 text-xl underline"}
            >
              https://example.com/aaa/bbb
            </a>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">日付</label>
          <div className={"animate-pulse bg-gray-300"}>
            <p className={"text-white text-opacity-0 text-xl"}>2020/12/31</p>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">時間帯</label>
          <div className={"animate-pulse bg-gray-300"}>
            <p className={"text-white text-opacity-0 text-xl"}>朝</p>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">写真</label>
          <div
            className={"animate-pulse bg-gray-300"}
            style={{ height: 500, width: 500 }}
          />
        </div>
        <button
          className="text-lg my-7 w-full sm:w-1/12 h-10 ring-1 ring-gray-200 rounded-md bg-gray-400 text-white"
          type="button"
        >
          戻る
        </button>
      </div>
    </>
  );
};

export default LoadingRecipe;
