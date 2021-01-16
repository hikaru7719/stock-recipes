import Link from "next/link";
import * as React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  logout: () => void;
};

const Menu: React.FC<Props> = (props) => {
  const onClick = () => props.setOpen(false);

  return (
    <div
      className={`w-full md:hidden ${props.open ? "" : "hidden"}  bg-red-400`}
    >
      <div className={"flex flex-col justify-center"}>
        <ul className={"flex flex-col"}>
          <Link href="/home">
            <li className={"text-center text-white py-1"} onClick={onClick}>
              一覧
            </li>
          </Link>
          <Link href="/new">
            <li className={"text-center text-white py-1"} onClick={onClick}>
              登録
            </li>
          </Link>
          <li className={"text-center text-white py-1"} onClick={props.logout}>
            ログアウト
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
