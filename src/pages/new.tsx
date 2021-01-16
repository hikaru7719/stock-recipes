import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import { createRecipe, upload } from "../firebase";
import { useUser } from "../hooks";
import { Recipe } from "../model";

const New: React.FC = () => {
  const router = useRouter();
  const uid = useUser(() => router.push("/"));
  const { register, handleSubmit } = useForm();
  const [fileName, setFileName] = React.useState("");

  const onSubmit = handleSubmit(async (data) => {
    const path = await upload(uid, data.image[0], fileName);
    const recipe = Recipe.of(data);
    recipe.imagePath = path;
    await createRecipe(uid, recipe);
  });

  return (
    <Layout>
      <h1 className="text-3xl font-mono text-gray-600">料理の登録</h1>
      <div className={"mt-6"}>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="flex flex-col my-3">
            <label className="mb-1 text-mono text-gray-600 text-lg">
              料理名
            </label>
            <input
              name="name"
              type="text"
              className="w-full sm:w-2/3 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
              ref={register}
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1 text-mono text-gray-600 text-lg">
              レシピURL
            </label>
            <input
              name="url"
              type="text"
              className="w-full sm:w-2/3 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
              ref={register}
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1 text-mono text-gray-600 text-lg">日付</label>
            <input
              name="date"
              type="date"
              className="w-full sm:w-1/6 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
              ref={register}
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1 text-mono text-gray-600 text-lg">
              時間帯
            </label>
            <select
              name="spanOfTime"
              className="w-full sm:w-1/6 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700"
              ref={register}
            >
              <option value="morning">朝</option>
              <option value="noon">昼</option>
              <option value="evening">夜</option>
              <option value="other">それ以外</option>
            </select>
          </div>
          <div className="flex flex-col my-3">
            <label className="mb-1 text-mono text-gray-600 text-lg">写真</label>
            <input
              type="text"
              disabled
              className="w-full sm:w-1/3 h-10 ring-1 ring-gray-200 rounded-md px-2 text-mono text-gray-700 mb-3 bg-white"
              placeholder="選択したファイル名が表示されます。"
              value={fileName}
            />
            <label className="w-full sm:w-2/12 h-10 ring-1 ring-gray-200 rounded-md bg-gray-400 text-white text-center pt-2">
              ファイルを選択
              <input
                name="image"
                type="file"
                className="hidden"
                ref={register}
                onChange={(e) => setFileName(e.target?.files[0]?.name)}
              />
            </label>
          </div>
          <button
            className="text-lg my-7 w-full sm:w-1/12 h-10 ring-1 ring-gray-200 rounded-md bg-red-400 text-white"
            type="submit"
          >
            登録
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default New;
