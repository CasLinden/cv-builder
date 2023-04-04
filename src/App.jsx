import Header from "./cv-components/Header/Header";
import Contact from "./cv-components/Contact/Contact";
import Profile from "./cv-components/Profile/Profile";
import Skills from "./cv-components/Skills/Skills";
import Languages from "./cv-components/Languages/Languages";
import WorkExperience from "/src/cv-components/Workexperience/WorkExperience";
import Education from "./cv-components/Education/Education";
import "./css/app.css";


function App() {
  return (
    <div className="cv">
      <Header></Header>
      <Contact></Contact>
      <Skills></Skills>
      <Languages></Languages>
      <Profile></Profile>
      <Education></Education>
      <WorkExperience></WorkExperience>
    </div>
  );
}

export default App;
