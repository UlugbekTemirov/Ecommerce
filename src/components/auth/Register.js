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
      <input type="text" value={fullName} onChange={getFullNameHandler} />
      <input type="text" value={email} onChange={getEmailHandler} />
      <button type="submit" onClick={formSubmitHandler}>
        Submit
      </button>
    </form>
  );
};

export default Register;
