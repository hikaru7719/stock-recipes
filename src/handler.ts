import { NextRouter } from "next/router";
import { reset } from "./store/messageSlice";

export async function onClickForRouter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  dispatch: any,
  router: NextRouter,
  path: string
): Promise<void> {
  dispatch(reset());
  await router.push(path);
}
