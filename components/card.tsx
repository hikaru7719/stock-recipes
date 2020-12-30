import * as React from "react";

type Props = {
  title: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className={"w-1/3 "}>
      <div className={"bg-white shadow-md mx-2 my-3 p-4 h-48"}>
        {props.title}
      </div>
    </div>
  );
};

export default Card;
