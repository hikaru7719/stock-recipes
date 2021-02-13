import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch } from "react-redux";
import { getCurrentUserUid } from "./firebase";
import { reset } from "./store/messageSlice";

export function useUser(func: () => void): string {
  const uid = getCurrentUserUid();

  React.useEffect(() => {
    if (!uid) {
      func();
    }
  }, []);

  return uid;
}
