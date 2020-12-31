import Image from "next/image";
import * as React from "react";
type Props = {
  title: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className={"w-full sm:w-1/3 mb-4 px-2"}>
      <div className={"bg-white shadow-md rounded-md h-72 p-6"}>
        <div className="flex justify-between mb-3">
          <p className="text-mono text-xl text-gray-600">{props.title}</p>
          <p className="text-mono text-gray-600">2020/12/10</p>
        </div>
        <div className="relative w-full h-5/6">
          <Image src="/tamago.jpg" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Card;
