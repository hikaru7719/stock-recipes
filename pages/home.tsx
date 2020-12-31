import * as React from "react";
import CardList from "../components/cardList";
import Header from "../components/header";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>
          <h1 className="text-3xl font-mono text-gray-600">最近作った料理</h1>
          <div className={"mt-6 -mx-2"}>
            <CardList
              contentList={["プルコギ", "唐揚げ", "蟹鍋", "とんかつ", "卵焼き"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
