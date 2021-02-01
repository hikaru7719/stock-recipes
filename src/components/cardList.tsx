import * as React from "react";
import { Recipe } from "../model";
import Card from "./card";
import DescriptionCard from "./descriptionCard";
type Props = {
  contentList: Array<Recipe>;
};

const CardList: React.FC<Props> = (props) => {
  if (props.contentList.length === 0) {
    return (
      <div className="flex justify-start flex-wrap flex-row w-full">
        <DescriptionCard />
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-start flex-wrap flex-row w-full">
        {props.contentList.map((content, i) => {
          return (
            <Card
              id={content.id}
              title={content.name}
              imagePath={content.imagePath}
              date={content.date}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
