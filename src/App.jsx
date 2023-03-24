import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import defaultValues from "./defaultvalues";
import Profile from "./Profile/Profile";
import WorkExperience from "./Workexperience/Workexperience";

import "./css/App.css";


function App() {
  // const [user, setUser] = useState(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   return (
  //     storedUser ||
  //     defaultValues
  //   );
  // });

  // // runs only once, []);
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  // const handleUserChange = (key, value) => {
  //   setUser({ ...user, [key]: value });
  // };

  // //runs whenever user is rendered , [user]);
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <div className="app">
      <Header></Header>
      <Contact></Contact>
      {/* <Profile me={user} editMe={handleUserChange}></Profile> */}
      {/* <WorkExperience me={user} editMe={handleUserChange}></WorkExperience> */}
    </div>
  );
}

export default App;
