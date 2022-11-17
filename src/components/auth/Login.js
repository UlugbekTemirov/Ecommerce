// import { useState } from "react";
// import Dashboard from "./Dashboard";

const Login = () => {
  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [authenticated, setauthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  // const users = [{ username: "Jane", password: "testpassword" }];
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const account = users.find((user) => user.username === username);
  //   if (account && account.password === password) {
  //     setauthenticated(true);
  //     localStorage.setItem("authenticated", true);
  //   }
  // };
  return (
    <h1>Login!</h1>
    // <div>
    //   <p>Welcome Back</p>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="Username"
    //       value={username}
    //       onChange={(e) => setusername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       name="Password"
    //       onChange={(e) => setpassword(e.target.value)}
    //     />
    //     <input type="submit" value="Submit" />
    //   </form>
    // </div>
  );
};

export default Login;

// import * as React from "react";
// import Cookies from "universal-cookie";

// const Login = () => {
//   const [authenticated, setauthenticated] = React.useState(
//     localStorage.getItem(localStorage.getItem("authenticated") || false)
//   );

//   const users = [{ username: "Jane", password: "testpassword" }];
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const account = users.find((user) => user.username === username);
//     if (account && account.password === password) {
//       setauthenticated(true);
//       localStorage.setItem("authenticated", true);
//     }
//   };
//   return (
//     // <form>
//     //   <label className="block mt-4">
//     //     <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
//     //       Full Name
//     //     </span>
//     //     <input
//     //       value={fullName}
//     //       onChange={getFullNameHandler}
//     //       type="text"
//     //       name="text"
//     //       className="mt-1 px-3 py-2 text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
//     //       placeholder="John Doe"
//     //     />
//     //   </label>
//     // </form>
//   );
// };

// export default Login;
