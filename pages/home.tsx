import * as React from "react";
import Card from "../components/card";
import Header from "../components/header";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>
          <h1 className="text-3xl font-mono text-gray-600">最近作った料理</h1>
          <div className="flex justify-center content-around flex-wrap w-full mt-3">
            <Card title="唐揚げ" />
            <Card title="チキンのトマト煮込み" />
            <Card title="蟹鍋" />
            <Card title="蟹鍋" />
            <Card title="蟹鍋" />
            <Card title="蟹鍋" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
