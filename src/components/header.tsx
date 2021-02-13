import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../firebase";
import { reset } from "../store/messageSlice";
import Menu from "./menu";

const Header: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const onClick = async (path: string) => {
    dispatch(reset());
    await router.push(path);
  };

  const onClickLogout = async () => {
    dispatch(reset());
    await logout();
    await router.push("/");
  };

  return (
    <>
      <div className={"w-full h-20 bg-red-400  text-white"}>
        <div
          className={
            "flex items-center justify-between container mx-auto h-full w-full"
          }
        >
          <h1
            className={"ml-10 text-2xl font-bold hover:underline"}
            onClick={() => {
              onClick("/home");
            }}
          >
            StockRecipes
          </h1>
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
            <li
              className={"hidden md:block mr-10 hover:underline"}
              onClick={() => {
                onClick("/home");
              }}
            >
              一覧
            </li>
            <li
              className={"hidden md:block mr-10 hover:underline"}
              onClick={() => {
                onClick("/new");
              }}
            >
              登録
            </li>
            <li
              className={"hidden md:block mr-10 hover:underline"}
              onClick={() => {
                onClickLogout();
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
        logout={onClickLogout}
      />
    </>
  );
};

export default Header;
