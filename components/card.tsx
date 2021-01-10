import Image from "next/image";
import Link from "next/link";
import * as React from "react";
type Props = {
  id: string;
  title: string;
  imagePath?: string;
};

const Card: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <Link href={`/recipe/${props.id}`}>
      <div className={"w-full sm:w-1/4 mb-4 px-2"}>
        <div className={"bg-white shadow-md rounded-md h-72 p-6"}>
          <div className="flex justify-between mb-3">
            <p className="text-mono text-xl text-gray-600">{props.title}</p>
            <p className="text-mono text-gray-600">2020/12/10</p>
          </div>
          {props.imagePath ? (
            <div
              className={`relative w-full h-5/6 ${
                isLoading ? "bg-gray-300 animate-pulse" : ""
              }`}
            >
              <div className={isLoading ? "hidden" : ""}>
                <Image
                  src={props.imagePath}
                  layout="fill"
                  onLoad={() => {
                    setIsLoading(false);
                  }}
                />
              </div>
            </div>
          ) : (
            <div
              className={
                "w-full h-5/6 bg-gray-300 text-center flex items-center justify-center"
              }
            >
              <p className="text-lg text-gray-600 text-mono">No Image</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
