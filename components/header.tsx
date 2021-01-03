import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { logout } from "../firebase";

const Header: React.FC = () => {
  const router = useRouter();
  const onClick = async () => {
    await logout();
    await router.push("/");
  };

  return (
    <div className={"w-full h-20 bg-red-400  text-white"}>
      <div
        className={
          "flex items-center justify-between container mx-auto h-full w-full"
        }
      >
        <h1 className={"ml-10 text-2xl font-bold"}>StockRecipes</h1>
        <ul className={"flex"}>
          <Link href="/home">
            <li className={"mr-10"}>ホーム</li>
          </Link>
          <Link href="/new">
            <li className={"mr-10"}>登録</li>
          </Link>
          <li
            className={"mr-10"}
            onClick={() => {
              onClick();
            }}
          >
            ログアウト
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
