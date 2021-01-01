import * as React from "react";
import Header from "../components/header";

const New: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>
          <h1 className="text-3xl font-mono text-gray-600">料理の登録</h1>
          <div className={"mt-6"}>
            <form className="flex flex-col">
              <div className="flex flex-col my-3">
                <label className="mb-1 text-mono text-gray-600 text-lg">
                  料理名
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="mb-1 text-mono text-gray-600 text-lg">
                  レシピURL
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="mb-1 text-mono text-gray-600 text-lg">
                  日付
                </label>
                <input
                  type="date"
                  className="w-full sm:w-1/6 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="mb-1 text-mono text-gray-600 text-lg">
                  時間帯
                </label>
                <select className="w-full sm:w-1/6 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700">
                  <option>朝</option>
                  <option>昼</option>
                  <option>夜</option>
                  <option>それ以外</option>
                </select>
              </div>
              <button
                className="text-lg my-7 w-full sm:w-1/12 h-10 ring-1 ring-gray-200 rounded-md bg-red-300 text-white"
                type="submit"
              >
                登録
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
