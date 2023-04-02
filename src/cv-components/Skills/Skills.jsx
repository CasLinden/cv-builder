import { useContext, useState, useEffect } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "../EditableText";
import Icon from "/src/Icons/Icon";
import RemoveSectionButton from "/src/Buttons/RemoveSectionButton";
import AddSectionButton from "/src/Buttons/AddSectionButton";
import { v4 as uuidv4 } from "uuid";
import "/src/css/nested-sections.scss";
import "/src/css/skills.css";

export default function Skills() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const addSkill = () => {
    const allSkills = cvData.skills.slice();
    allSkills.push({
      key: uuidv4(),
      icon: "js",
      description: "Skill description",
    });
    setCvData((prevData) => ({ ...prevData, skills: allSkills }));
  };

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
        <AddSectionButton onClick={addSkill} />
      </div>
      {cvData.skills.map((skill, index) => (
        <div className="skill" key={skill.key}>
          <Icon index={index} skill={skill}></Icon>
          <EditableText
            field="skills"
            component={(props) => <span {...props} />}
            index={index}
            nestedField="description"
          />
          <div className="button-container">
            <RemoveSectionButton index={index} onClick={removeSkill} />
          </div>
        </div>
      ))}
    </div>
  );
}