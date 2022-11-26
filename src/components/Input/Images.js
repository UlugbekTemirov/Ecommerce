import * as React from "react";

const Images = (props) => {
  const { label, type, name, func, error, accept } = props;

  return (
    <label className="block mt-4">
      <span className=" block text-lg font-large text-slate-500">{label}</span>
      <input
        type={type}
        name={name}
        accept={accept}
        onChange={func}
        className="px-3 py-2 text-black bg-slate-300 focus:ring-1  focus:border-sky-500 focus:ring-sky-500 border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm"
      />
      <h6 className="text-xs mt-2 text-red-600">{error}</h6>
    </label>
  );
};

export default Images;