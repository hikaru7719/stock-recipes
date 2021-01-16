import * as React from "react";
import { formatYear } from "../format";

const Footer: React.FC = () => {
  return (
    <div className={"-mt-10 w-full bg-gray-400 text-white text-center"}>
      <p className={"p-2"}>
        {`©️${formatYear(new Date())} Hikaru Miyahara. All Rights Reserved.`}
      </p>
    </div>
  );
};

export default Footer;
