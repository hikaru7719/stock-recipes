import Image from "next/image";
import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

const Description: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header />
        <div className={"flex-1"}>
          <div className="relative min-h-screen">
            <Image
              className={
                "opacity-30 object-center object-cover pointer-events-none"
              }
              src={"http://localhost:3000/curry.png"}
              layout="fill"
            ></Image>
            <div className={"relative z-1 flex flex-col top-1/2"}>
              <h1 className={"text-9xl font-mono font-bold text-gray-700"}>
                Stock
              </h1>
              <h1 className={"text-9xl font-mono font-bold text-gray-700"}>
                Recipes
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Description;
