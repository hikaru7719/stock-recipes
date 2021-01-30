import * as React from "react";
import ErrorPanel from "./errorPanel";
import SuccessPanel from "./successPanel";

const SelectMessage: React.FC<{ message: string }> = ({ message }) => {
  if (message === "error") {
    return <ErrorPanel />;
  }
  if (message === "success") {
    return <SuccessPanel />;
  }
  return <></>;
};

export default SelectMessage;
