import { useContext, useState } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "../EditableText";
import { v4 as uuidv4 } from "uuid";
import "/src/css/nested-sections.css";
import "/src/css/skills.css"
import upload from "/src/assets/skillicons/upload.svg";
import react from "/src/assets/skillicons/react.svg";
import js from "/src/assets/skillicons/js.svg";
import jest from "/src/assets/skillicons/jest.svg";
import git from "/src/assets/skillicons/git.svg";
import css from "/src/assets/skillicons/css.svg";

export default function Skills() {
  const { cvData, setCvData } = useContext(CvDataContext);
  const [showIconSelector, setShowIconSelector] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
  const [ icons, setIcons ] = useState({
    upload: upload,
    react: react,
    js: js,
    jest: jest,
    git: git,
    css: css })

  const getIcon = (title) => {
    if (icons.hasOwnProperty(title)) {
      return icons[title]
    } 
    return icons.upload
  }

  const differentIcon = (index) => {
    setSelectedSkillIndex(index);
    setShowIconSelector(true);
  };

  const handleIconSelection = (iconName) => {
    const allSkills = cvData.skills.slice();
    allSkills[selectedSkillIndex].icon = iconName;
    setCvData((prevData) => ({
      ...prevData,
      skills: allSkills,
    }));
    setShowIconSelector(false);
  };

  const iconSelectionWindow = (
    <div className="icon-selection-window">
      {Object.keys(icons).map((iconName) => (
        <div
          key={iconName}
          className="icon-tile"
          onClick={() => handleIconSelection(iconName)}
        >
          <img src={icons[iconName]} alt={iconName} />
        </div>
      ))}
    </div>
  );

  const addSkill = () => {
    const allSkills = cvData.skills.slice();
    allSkills.push( { key: uuidv4(), icon: "upload", description: "Skill description" });
    setCvData((prevData) => ({ ...prevData, skills: allSkills }));
  }

  const removeSkill = (index) => {
    const allSkills = cvData.skills.slice();
    allSkills.splice(index, 1);
    setCvData((prevData) => ({
      ...prevData,
      skills: allSkills,
    }));
  };
  
  return (
    <div className="skills">
      <div className="title-holder">
        <h3>SKILLS</h3>
        <button className="add-section-button" onClick={() => addSkill()}>+
        </button>
      </div>
      {cvData.skills.map((skill, index) => ( 
        <div className="skill" key={skill.key}>
          <div className="icon-container"><img onClick={() => differentIcon(index)} src={getIcon(skill.icon)} alt="" /></div>
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
      {showIconSelector && iconSelectionWindow}
    </div>
  );
}