import * as React from "react";

const BackStage = (props) => {
  const { closeBusketHandler } = props;
  return (
    <div
      onClick={closeBusketHandler}
      className="w-screen h-screen -mt-20 absolute bg-gray-900 z-10 opacity-90"
    ></div>
  );
};

export default BackStage;
