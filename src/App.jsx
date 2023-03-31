import Header from "./cv-components/Header/Header";
import Contact from "./cv-components/Contact/Contact";
import Profile from "./cv-components/Profile/Profile";
import Skills from "./cv-components/Skills/Skills";
import WorkExperience from "./cv-components/Workexperience/WorkExperience";
import Education from "./cv-components/Education/Education";
import "./css/app.css";


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Contact></Contact>
      <Skills></Skills>
      <Education></Education>
      <Profile></Profile>
      <WorkExperience></WorkExperience>
    </div>
  );
}

export default App;
