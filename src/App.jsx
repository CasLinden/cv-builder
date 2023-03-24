import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import WorkExperience from "./Workexperience/Workexperience";

import "./css/App.css";


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Contact></Contact>
      <Profile></Profile>
      <WorkExperience></WorkExperience>
    </div>
  );
}

export default App;
