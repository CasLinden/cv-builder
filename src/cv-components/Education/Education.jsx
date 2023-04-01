import { useContext } from "react";
import { CvDataContext } from "../../CvDataContext";
import EditableText from "../EditableText";
import RemoveSectionButton from "/src/Buttons/RemoveSectionButton";
import AddSectionButton from "/src/Buttons/AddSectionButton";
import { v4 as uuidv4 } from 'uuid';
import "../../css/nested-sections.scss"
import "../../css/education.css"

export default function Education() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const removeSchool = (index) => {
    const allSchools = cvData.education.slice();
    allSchools.splice(index, 1);
    setCvData((prevData) => ({
      ...prevData,
      education: allSchools,
    }));
  };

  const addSchool = () => {
    const allSchools = cvData.education.slice();
    const index = allSchools.length + 1;
    allSchools.push(  {
      key: uuidv4(),
      institute: "Univesity of XXXX",
      diploma: "Msc something",
      period: "20xx -20xx"
    });
    setCvData((prevData) => ({
      ...prevData,
      education: allSchools,
    }));
  };

  return (
    <div className="education">
      <div className="title-holder">
        <h3>EDUCATION</h3>
        <AddSectionButton onClick={addSchool}></AddSectionButton>
      </div>
      {cvData.education.map((school, index) => (
        <div className="education-section" key={school.key}>
          <EditableText
            field="education"
            component={(props) => <h4 {...props} />}
            index={index}
            nestedField="diploma"
          />
          <EditableText
            field="education"
            component={(props) => <h5 {...props} />}
            index={index}
            nestedField="institute"
          />
          <EditableText
            field="education"
            component={(props) => <h6 {...props} />}
            index={index}
            nestedField="period"
          />
          <RemoveSectionButton index={index} onClick={removeSchool}></RemoveSectionButton>
        </div>
      ))}
    </div>
  );
}