import { useContext } from "react";
import { CvDataContext } from "../../CvDataContext";
import SkillItem from "./Skillitem";
import "../../css/nestedsections.css";

export default function Skills() {
  const { cvData, setCvData } = useContext(CvDataContext);



  return (
    <div className="skills">
      <div className="title-holder">
        <h3>SKILLS</h3>
        <button className="add-section-button" onClick={() => addJob()}>
          +
        </button>
      </div>
    </div>
  );
}
