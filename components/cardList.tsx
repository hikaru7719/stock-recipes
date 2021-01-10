import * as React from "react";
import { Recipe } from "../model";
import Card from "./card";

type Props = {
  contentList: Array<Recipe>;
};

const CardList: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-start flex-wrap flex-row w-full">
        {props.contentList.map((content, i) => {
          return (
            <Card
              id={content.id}
              title={content.name}
              imagePath={content.imagePath}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
