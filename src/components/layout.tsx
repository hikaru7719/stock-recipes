import * as React from "react";
import Header from "./header";

const Layout: React.FC = (props) => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className={"container mx-auto min-h-screen"}>
        <div className={"p-10"}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
