import * as React from "react";

const ErrorPanel: React.FC = () => {
  return (
    <div
      className={
        "font-medium w-full sm:w-1/2 my-2 py-1 px-1 rounded-md  text-red-700 bg-red-100 border border-red-300 text-left"
      }
    >
      <div className={"text-xl font-normal max-w-full"}>
        操作が失敗しました。
      </div>
    </div>
  );
};

export default ErrorPanel;
