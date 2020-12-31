import * as React from "react";
import Card from "./card";

type Props = {
  contentList: string[];
};

const CardList: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-start flex-wrap flex-row w-full">
        {props.contentList.map((content, i) => {
          return <Card title={content} key={i} />;
        })}
      </div>
    </>
  );
};

export default CardList;
