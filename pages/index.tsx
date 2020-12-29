import * as React from "react";

const Login: React.FC = () => {
  return (
    <div
      className={
        "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      }
    >
      <div className={"w-1/3 bg-white shadow-md"}>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <div className="px-7 py-8">
          <button
            type="button"
            className={
              "w-full px-8 my-2 rounded-md h-10 bg-blue-500 text-white text-lg"
            }
          >
            Sign in with Twitter
          </button>
          <button
            type="button"
            disabled
            className={
              "w-full px-8 my-2 rounded-md h-10 bg-gray-300 text-white text-lg"
            }
          >
            Sign in with Google
          </button>
          <button
            type="button"
            disabled
            className={
              "w-full px-8 my-2 rounded-md h-10 bg-gray-300 text-white text-lg"
            }
          >
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
