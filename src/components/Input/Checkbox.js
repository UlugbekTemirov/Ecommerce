import * as React from "react";

const Checkbox = (props) => {
  const { getGenderHandler } = props;

  const [maleChecker, setMaleChecker] = React.useState(false);
  const getMaleHandler = (e) => {
    setMaleChecker(e.target.checked);
  };

  const [femaleChecker, setFemaleChecker] = React.useState(false);
  const getFemaleHandler = (e) => {
    setFemaleChecker(e.target.checked);
  };

  const [kidsChecker, setKidsChecker] = React.useState(false);
  const getKidsHandler = (e) => {
    setKidsChecker(e.target.checked);
  };

  React.useEffect(() => {
    getGenderHandler(maleChecker, femaleChecker, kidsChecker);
  }, [maleChecker, femaleChecker, kidsChecker]);

  return (
    <div>
      <span className=" block text-lg font-large text-slate-500">Gender</span>
      <div className="flex items-center">
        <div className="w-24">
          <label
            htmlFor="male"
            className={`block ${
              maleChecker ? "bg-blue-600 opacity-100" : "bg-gray-600"
            }  rounded-lg text-center opacity-75 p-1`}
          >
            Male
          </label>
          <input
            id="male"
            type="checkbox"
            checked={maleChecker}
            onChange={getMaleHandler}
            className="hidden mt-1 px-3 py-2 text-black bg-slate-300 focus:ring-1 focus:border-sky-500 focus:ring-sky-500 border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm"
          />
        </div>
        <div className="w-24 ml-4 items">
          <label
            htmlFor="female"
            className={`block ${
              femaleChecker ? "bg-blue-600 opacity-100" : "bg-gray-600"
            }  rounded-lg text-center opacity-75 p-1`}
          >
            Female
          </label>
          <input
            id="female"
            checked={femaleChecker}
            onChange={getFemaleHandler}
            type="checkbox"
            className="hidden mt-1 px-3 py-2 text-black bg-slate-300 focus:ring-1  focus:border-sky-500 focus:ring-sky-500 border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm"
          />
        </div>
        <div className="w-24 ml-4 items">
          <label
            htmlFor="kids"
            className={`block ${
              kidsChecker ? "bg-blue-600 opacity-100" : "bg-gray-600"
            }  rounded-lg text-center opacity-75 p-1`}
          >
            Kids
          </label>
          <input
            id="kids"
            checked={kidsChecker}
            onChange={getKidsHandler}
            type="checkbox"
            className="hidden mt-1 px-3 py-2 text-black bg-slate-300 focus:ring-1  focus:border-sky-500 focus:ring-sky-500 border shadow-sm placeholder-slate-500 focus:outline-none block w-full rounded-md sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
