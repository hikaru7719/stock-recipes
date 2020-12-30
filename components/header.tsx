import * as React from "react";

const Header: React.FC = () => {
  return (
    <div className={"w-full h-20 bg-red-400  text-white"}>
      <div
        className={
          "flex items-center justify-between container mx-auto h-full w-full"
        }
      >
        <h1 className={"ml-10 text-2xl font-bold"}>StockRecipes</h1>
        <ul className={"flex"}>
          <li className={"mr-10"}>ログアウト</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
