import * as React from "react";
import LoadingCard from "./loadingCard";

const LoadingCardList: React.FC = () => {
  return (
    <>
      <div className="flex justify-start flex-wrap flex-row w-full">
        {[0, 0, 0, 0, 0, 0, 0, 0].map((_content, i) => {
          return <LoadingCard key={i} />;
        })}
      </div>
    </>
  );
};

export default LoadingCardList;
