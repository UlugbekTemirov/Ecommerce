import * as React from "react";

const Images = (props) => {
  const { label, type, name, func, accept, imgName, id } = props;

  return (
    <>
      <span className=" block text-lg font-large text-slate-500 mt-4">
        {label}
      </span>
      <label
        htmlFor={id}
        className={`block ${
          Boolean(imgName) ? "bg-gray-500 opacity-75" : "bg-blue-700"
        }  rounded-md p-2 cursor-pointer`}
      >
        {Boolean(imgName) ? "You selected: " + imgName : "Select Images:"}
      </label>
      <input
        type={type}
        name={name}
        accept={accept}
        onChange={func}
        id={id}
        className="hidden px-3 py-2 text-black bg-slate-300 focus:ring-1  focus:border-sky-500 focus:ring-sky-500 border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm"
      />
    </>
  );
};

export default Images;
