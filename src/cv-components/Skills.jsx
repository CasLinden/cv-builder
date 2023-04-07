import { useContext } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "./single-html-components/EditableText";
import Icon from "/src/cv-components/single-html-components/Icon";
import RemoveSectionButton from "/src/Buttons/RemoveSectionButton";
import AddSectionButton from "/src/Buttons/AddSectionButton";
import { addRemove } from "/src/utils/addRemove";
import "/src/css/nested-sections.scss";
import "/src/css/skills.css";

export default function Skills() {
  const { cvData } = useContext(CvDataContext);

  const { add, remove } = addRemove();

  const addSkill = () => {
    add("skills");
  };

  const removeSkill = (index) => {
    remove("skills", index);
  };

  return (
    <div className="skills">
      <div className="title-holder">
        <h3>SKILLS</h3>
        <AddSectionButton onClick={addSkill} />
      </div>
      {cvData.skills.map((skill, index) => (
        <div className="skill" key={skill.key}>
          <Icon index={index} icon={skill.icon} section="skills"></Icon>
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