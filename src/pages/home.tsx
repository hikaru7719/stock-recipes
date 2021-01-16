import { useRouter } from "next/router";
import * as React from "react";
import useSWR from "swr";
import CardList from "../components/cardList";
import Header from "../components/header";
import LoadingCardList from "../components/loadingCardList";
import { download, findRecipes } from "../firebase";
import { useUser } from "../hooks";

const Home: React.FC = () => {
  const router = useRouter();
  const uid = useUser(() => router.push("/"));
  const { data } = useSWR(uid, async (uid: string) => {
    const recipes = await findRecipes(uid);
    const result = await Promise.all(
      recipes.map(async (r) => {
        if (r.imagePath) {
          r.imagePath = await download(r.imagePath);
        }
        return r;
      })
    );
    return result;
  });

  return data ? (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>
          <h1 className="text-3xl font-mono text-gray-600">最近作った料理</h1>
          <div className={"mt-6 -mx-2"}>
            <CardList contentList={data} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>
          <h1 className="text-3xl font-mono text-gray-600">最近作った料理</h1>
          <div className={"mt-6 -mx-2"}>
            <LoadingCardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
