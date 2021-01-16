import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout: React.FC = (props) => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header />
        <div className={"flex-1 container mx-auto"}>
          <div className={"p-10"}>{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
