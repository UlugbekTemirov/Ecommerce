import * as React from "react";

// STATIC ICONS
import plus from "../icons/plus.png";
import minus from "../icons/minus.png";

const Counter = () => {
  return (
    <div className="flex items-center mb-4 mt-2">
      <button className="mr-2 p-1 rounded bg-gray-700 hover:bg-gray-600 opacity-50">
        <img className="w-5 opacity-75" src={minus} alt="minus" />
      </button>
      <h1 className="bg-gray-700 rounded px-3 text-red-200">1</h1>
      <button className="hover:bg-gray-600 bg-gray-700 ml-2 p-1 rounded transition-all opacity-50">
        <img className="w-5 opacity-75" src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default Counter;
