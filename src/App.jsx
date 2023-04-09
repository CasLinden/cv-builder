import ActionBar from "./ui-components/ActionBar";
import Header from "./cv-components/Header/Header";
import Contact from "./cv-components/Contact";
import Profile from "./cv-components/Profile";
import Skills from "./cv-components/Skills";
import Languages from "./cv-components/Languages";
import WorkExperience from "/src/cv-components/WorkExperience";
import Education from "./cv-components/Education";
import { IconsProvider } from "/src/contexts/IconsContext";
import "./css/cv.css";

function App() {
  return (
    <div className="site-wrapper">
      <div className="action-bar">
        <ActionBar></ActionBar>
      </div>
      <IconsProvider>
        <div className="cv" id="cv">
          <Header></Header>
          <Contact></Contact>
          <Skills></Skills>
          <Languages></Languages>
          <Profile></Profile>
          <Education></Education>
          <WorkExperience></WorkExperience>
        </div>
      </IconsProvider>
    </div>
  );
}

export default App;
