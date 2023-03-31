import { useContext } from "react";
import { CvDataContext } from "../../CvDataContext";
import EditableText from "../EditableText";
import "../../css/nestedsections.css"

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
      key: "defaultschool1",
      institute: "Univesity of XXXX",
      diploma: "Bsc something",
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
        <button className="add-section-button" onClick={() => addSchool()}>
          +
        </button>
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
          <button
            className="remove-section-button"
            onClick={() => removeSchool(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}