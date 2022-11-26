import * as React from "react";

const Radio = (props) => {
  const { label, id, value, func, error } = props;

  return (
    <label className="flex mr-10 items-center">
      <span className="block text-lg font-large">{label}</span>
      <input
        type="radio"
        id={id}
        name="gender"
        value={value}
        onClick={func}
        className="ml-3 px-3 py-2 text-black bg-slate-300  focus:ring-1  focus:border-sky-500 focus:ring-sky-500 border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm"
      />
      <h6 className="text-xs mt-2 text-red-600">{error}</h6>
    </label>
  );
};

export default Radio;
