import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import useSWR from "swr";
import Layout from "../../components/layout";
import LoadingRecipe from "../../components/loadingRecipe";
import { deleteRecipe, download, getRecipe } from "../../firebase";
import { formatDate, formatSpanOfTime } from "../../format";
import { useUser } from "../../hooks";

const Recipe: React.FC = () => {
  const router = useRouter();
  const uid = useUser(() => router.push("/"));
  const { id } = router.query;

  const { data } = useSWR([uid, id], async (uid: string, id: string) => {
    const recipe = await getRecipe(uid, id);
    if (recipe.imagePath) {
      recipe.imagePath = await download(recipe.imagePath);
    }
    return recipe;
  });

  const onClickBack = () => {
    router.push("/home");
  };

  const onClickDelete = async () => {
    await deleteRecipe(uid, id as string);
    router.push("/home");
  };

  return data ? (
    <Layout>
      <h1 className="text-3xl font-mono text-gray-600">料理の詳細</h1>
      <div className={"mt-6"}>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">料理名</label>
          <p className={"text-mono text-gray-700 text-xl"}>{data.name}</p>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">
            レシピURL
          </label>
          <a
            href={data.url}
            target="blank"
            className={"text-mono text-gray-700 text-xl underline truncate"}
          >
            {data.url}
          </a>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">日付</label>
          <p className={"text-mono text-gray-700 text-xl"}>
            {formatDate(data.date)}
          </p>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">時間帯</label>
          <p className={"text-mono text-gray-700 text-xl"}>
            {formatSpanOfTime(data.spanOfTime)}
          </p>
        </div>
        <div className="flex flex-col my-3">
          <label className="mb-1 text-mono text-gray-600 text-lg">写真</label>
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
        <div className="flex">
          <button
            className="text-lg my-7 w-1/2 sm:w-1/12 h-10 ring-1 ring-gray-200 rounded-md bg-gray-400 text-white"
            type="button"
            onClick={onClickBack}
          >
            戻る
          </button>
          <button
            className="text-lg my-7 w-1/2 sm:w-1/12 h-10 ring-1 ring-gray-200 rounded-md bg-blue-400 text-white ml-6"
            type="button"
            onClick={onClickDelete}
          >
            削除
          </button>
        </div>
      </div>
    </Layout>
  ) : (
    <Layout>
      <LoadingRecipe />
    </Layout>
  );
};

export default Recipe;
