import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { logout } from "../firebase";

const Description: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const onClick = async () => {
    await logout();
    await router.push("/");
  };
  return (
    <>
      <div className="flex flex-col bg-red-400 min-h-screen">
        <div className={"w-full h-20 bg-red-400  text-white"}>
          <div
            className={
              "flex items-center justify-end container mx-auto h-full w-full"
            }
          >
            <ul className={"flex"}>
              {open ? (
                <svg
                  className="w-8 mr-10 md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 mr-10 md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <Link href="/home">
                <li className={"hidden md:block mr-10 hover:underline"}>
                  一覧
                </li>
              </Link>
              <Link href="/new">
                <li className={"hidden md:block mr-10 hover:underline"}>
                  登録
                </li>
              </Link>
              <li
                className={"hidden md:block mr-10 hover:underline"}
                onClick={() => {
                  onClick();
                }}
              >
                ログアウト
              </li>
            </ul>
          </div>
        </div>
        <Menu
          open={open}
          setOpen={(open: boolean) => setOpen(open)}
          logout={onClick}
        />
        <div className={"flex-1"}>
          <div className="p-10 container mx-auto">
            <div className={"flex flex-col divide-y-4 divide-white"}>
              <div className={"flex flex-col mb-4"}>
                <h1
                  className={
                    "text-7xl md:text-9xl font-mono font-bold text-white"
                  }
                >
                  Stock
                </h1>
                <h1
                  className={
                    "text-7xl md:text-9xl font-mono font-bold text-white"
                  }
                >
                  Recipes
                </h1>
              </div>
              <div className={"flex flex-col pt-4"}>
                <p className="text-white">
                  StockRecipesは自分が作った料理の記録をつけることができます。
                </p>
                <p className="text-white">
                  どんなレシピで作ったかを忘れないようにレシピのURLと写真を一緒に保存できるのが特徴です。
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Description;
