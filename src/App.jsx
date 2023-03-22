import { useState, useEffect } from "react";
import Header from "./Header/Header";
import RandoButton from "./RandoButton";
import Contact from "./Contact/Contact";
import defaultValues from "./defaultvalues";

import "./css/App.css";


function App() {
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return (
      storedUser || defaultValues
    );
  });

  // runs only once, []);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleUserChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  //runs whenever user is rendered , [user]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="app">
      {/* <RandoButton me={user}></RandoButton> */}
      <Header me={user} editMe={handleUserChange}></Header>
      <Contact me={user} editMe={handleUserChange}></Contact>
    </div>
  );
}

export default App;
