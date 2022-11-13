import * as React from "react";

const Register = () => {
  const DUMMY_DATA = [
    {
      fullName: "Ulugbek Temirov",
      email: "temirovulugbek2003@gmail.com",
    },
    {
      fullName: "John Doe",
      email: "johndoe@gmail.com",
    },
  ];

  const [data, setData] = React.useState(DUMMY_DATA);

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const getFullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const getEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      fullName,
      email,
    };
    setData((prev) => [...prev, userData]);
    setFullName("");
    setEmail("");
  };
  console.log("data");

  return (
    <form>
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
          Full Name
        </span>
        <input
          value={fullName}
          onChange={getFullNameHandler}
          type="text"
          name="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="John Doe"
        />
      </label>
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
          Email
        </span>
        <input
          value={email}
          onChange={getEmailHandler}
          type="email"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>

      <button type="submit" onClick={formSubmitHandler}>
        Submit
      </button>
    </form>
  );
};

export default Register;
