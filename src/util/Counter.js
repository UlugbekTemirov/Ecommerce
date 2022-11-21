import * as React from "react";
import { toast } from "react-toastify";
import plus from "../icons/plus.png";
import minus from "../icons/minus.png";

const Counter = (props) => {
  const { setCount, count } = props;

  const increaseHandler = () => {
    count < 20
      ? setCount((prev) => ++prev)
      : toast.warning("maximum items 20", { theme: "dark" });
  };

  const decreaseHandler = () => {
    count <= 1
      ? toast.warning("minimum items 1", { theme: "dark" })
      : setCount((prev) => --prev);
  };

  return (
    <div className="flex items-center mb-4 mt-2">
      <button
        className="mr-2 p-1 rounded-full bg-gray-700 hover:bg-gray-600"
        onClick={decreaseHandler}
      >
        <img className="w-5 opacity-75" src={minus} alt="minus" />
      </button>
      <h1 className="bg-gray-600 rounded-lg px-3 text-red-200">{count}</h1>
      <button
        className="hover:bg-gray-600 bg-gray-700 ml-2 p-1 rounded transition-all"
        onClick={increaseHandler}
      >
        <img className="w-5 opacity-75" src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default Counter;
