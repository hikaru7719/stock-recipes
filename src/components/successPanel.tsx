const SuccessPanel: React.FC = () => {
  return (
    <div
      className={
        "font-medium py-1 px-1 w-full sm:w-1/2 my-2 rounded-md text-green-700 bg-green-100 border border-green-300　text-left"
      }
    >
      <div className={"text-xl font-normal max-w-full"}>
        操作が成功しました。
      </div>
    </div>
  );
};

export default SuccessPanel;
