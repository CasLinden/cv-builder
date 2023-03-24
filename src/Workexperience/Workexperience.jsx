
import { useContext } from "react";
import { CvDataContext } from "../CvDataContext";
import EditableText from "../EditableText";


export default function WorkExperience() {
  const { cvData } = useContext(CvDataContext);

  console.log(cvData.workExperience)

  return (
    <div className="work-experience">
      <h3>WORK EXPERIENCE</h3>
      {cvData.workExperience.map((job, index) => (
        <div className="work-experience-section" key={job.key}>
          <EditableText
            field="workExperience"
            component={(props) => <h4 {...props} />}
            index={index}
            nestedField="jobTitle"
          />
          <EditableText
            field="workExperience"
            component={(props) => <h5 {...props} />}
            index={index}
            nestedField="companyName"
          />
          <EditableText
            field="workExperience"
            component={(props) => <h6 {...props} />}
            index={index}
            nestedField="period"
          />
          <EditableText
            field="workExperience"
            component={(props) => <span {...props} />}
            index={index}
            nestedField="jobDescription"
          />
        </div>
      ))}
    </div>
  );
}