import * as React from "react";

type Props = {
  title: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className={"w-full sm:w-1/3 bg-white shadow-md p-4 h-48"}>
      {props.title}
    </div>
  );
};

export default Card;
