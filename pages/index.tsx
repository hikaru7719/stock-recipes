import { useRouter } from "next/router";
import * as React from "react";
import { login } from "../firebase";
const Login: React.FC = () => {
  const router = useRouter();

  const onClickTwitter = async () => {
    await login();
    await router.push("/new");
  };

  return (
    <div
      className={
        "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      }
    >
      <div className={"w-1/3 bg-white shadow-md"}>
        <h2 className="mt-6 text-center text-3xl text-mono font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <div className="px-7 py-6">
          <button
            type="button"
            className={
              "w-full px-8 my-2 rounded-md h-10 bg-blue-500 text-white text-lg"
            }
            onClick={() => onClickTwitter()}
          >
            Twitterでサインイン
          </button>
          <button
            type="button"
            disabled
            className={
              "w-full px-8 my-2 rounded-md h-10 bg-gray-300 text-white text-lg"
            }
          >
            Googleでサインイン
          </button>
          <button
            type="button"
            disabled
            className={
              "w-full px-8 my-2 rounded-md h-10 bg-gray-300 text-white text-lg"
            }
          >
            Facebookでサインイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
