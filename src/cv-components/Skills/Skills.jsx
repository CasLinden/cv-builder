import { useContext, useState } from "react";
import { CvDataContext } from "../../CvDataContext";
import EditableText from "../EditableText";
import "../../css/nested-sections.css";
import "/src/css/skills.css"

// import a bunch of icons 
import upload from "/src/assets/skillicons/upload.svg";
import react from "/src/assets/skillicons/react.svg";
import js from "/src/assets/skillicons/js.svg";
import jest from "/src/assets/skillicons/jest.svg";
import git from "/src/assets/skillicons/git.svg";
import css from "/src/assets/skillicons/css.svg";

export default function Skills() {
  const { cvData, setCvData } = useContext(CvDataContext);
  const [ icons, setIcons ] = useState({
    upload: upload,
    react: react,
    js: js,
    jest: jest,
    git: git,
    css: css })

  const getIcon = (skill) => {
    switch (skill) {
      case "react":
        return icons.react;
      case "js":
        return icons.js;
      case "jest":
        return icons.jest;
      case "git":
        return icons.git;
        case "css":
        return icons.css;
      default:
        return icons.upload;
    }
  }
 
  return (
    <div className="skills">
      <div className="title-holder">
        <h3>SKILLS</h3>
        <button className="add-section-button" onClick={() => addSkill()}>+
        </button>
      </div>
      {cvData.skills.map((skill, index) => ( 
        <div className="skill" key={skill.key}>
          <div className="icon-container"><img src={getIcon(skill.icon)} alt="" /></div>
          <EditableText
            field="skills"
            component={(props) => < span {...props} />}
            index={index}
            nestedField="description"
          />
           <button
            className="remove-section-button"
            onClick={() => removeSkill(index)}
          >X</button>
        </div>
      ))}  
       
    </div>
  );
}

