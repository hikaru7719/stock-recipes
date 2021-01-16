import * as React from "react";
import { getCurrentUserUid } from "./firebase";

export function useUser(func: () => void): string {
  const uid = getCurrentUserUid();

  React.useEffect(() => {
    if(!uid) {
      func();
    }
  }, []);

  return uid;
}
