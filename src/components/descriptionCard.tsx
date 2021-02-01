import Link from "next/link";
import * as React from "react";

const DescriptionCard: React.FC = () => {
  return (
    <Link href="/new">
      <div className={"w-full sm:w-1/4 mb-4 px-2"}>
        <div className={"bg-white shadow-lg hover:shadow rounded-md h-72 p-6"}>
          <div className="flex justify-between mb-3">
            <p className="text-mono text-xl text-gray-600">料理の登録</p>
          </div>
          <p className="text-mono text-gray-600">
            まずは料理の登録をしてみましょう。
          </p>
          <p className="text-mono text-gray-600">
            このカードをクリックすることで登録画面に遷移します。
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DescriptionCard;
