import * as React from "react";

const Input = (props) => {
  const { label, type, name, pholder, value, func, isValid, error } = props;
  let validation = isValid ?? true;

  return (
    <label className="block mt-4">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={func}
        className={`mt-1 px-3 py-2 text-black bg-slate-300 ${
          !validation
            ? "border-2 border-rose-500"
            : "focus:ring-1  focus:border-sky-500 focus:ring-sky-500"
        } border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm `}
        placeholder={pholder}
      />
      <h6 className="text-xs mt-2 text-red-600">{error}</h6>
    </label>
  );
};

export default Input;
