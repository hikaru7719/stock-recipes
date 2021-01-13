import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import useSWR from "swr";
import Header from "../../components/header";
import { download, getCurrentUserUid, getRecipe } from "../../firebase";
import { formatDate, formatSpanOfTime } from "../../format";

const Recipe: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(
    [getCurrentUserUid(), id],
    async (uid: string, id: string) => {
      const recipe = await getRecipe(uid, id);
      if (recipe.imagePath) {
        recipe.imagePath = await download(recipe.imagePath);
      }
      return recipe;
    }
  );

  const onClick = () => {
    router.push("/home");
  };

  return data ? (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>
          <h1 className="text-3xl font-mono text-gray-600">料理の詳細</h1>
          <div className={"mt-6"}>
            <div className="flex flex-col my-3">
              <label className="mb-1 text-mono text-gray-600 text-lg">
                料理名
              </label>
              <p className={"text-mono text-gray-700 text-xl"}>{data.name}</p>
            </div>
            <div className="flex flex-col my-3">
              <label className="mb-1 text-mono text-gray-600 text-lg">
                レシピURL
              </label>
              <a
                href={data.url}
                target="blank"
                className={"text-mono text-gray-700 text-xl underline"}
              >
                {data.url}
              </a>
            </div>
            <div className="flex flex-col my-3">
              <label className="mb-1 text-mono text-gray-600 text-lg">
                日付
              </label>
              <p className={"text-mono text-gray-700 text-xl"}>
                {formatDate(data.date)}
              </p>
            </div>
            <div className="flex flex-col my-3">
              <label className="mb-1 text-mono text-gray-600 text-lg">
                時間帯
              </label>
              <p className={"text-mono text-gray-700 text-xl"}>
                {formatSpanOfTime(data.spanOfTime)}
              </p>
            </div>
            <div className="flex flex-col my-3">
              <label className="mb-1 text-mono text-gray-600 text-lg">
                写真
              </label>
              <Image
                className={""}
                src={data.imagePath}
                layout={
                  window.matchMedia("(max-width:767px)").matches
                    ? "responsive"
                    : "fixed"
                }
                height={500}
                width={500}
              />
            </div>
            <button
              className="text-lg my-7 w-full sm:w-1/12 h-10 ring-1 ring-gray-200 rounded-md bg-gray-400 text-white"
              type="button"
              onClick={onClick}
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Recipe;
