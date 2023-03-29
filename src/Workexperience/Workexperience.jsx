
import { useContext } from "react";
import { CvDataContext } from "../CvDataContext";
import EditableText from "../EditableText";
import '../css/workexperience.css'


export default function WorkExperience() {
  const { cvData, setCvData } = useContext(CvDataContext);

  
 
  const removeJob = (index) => {
    const allJobs = cvData.workExperience.slice();
    allJobs.splice(index, 1);
    setCvData((prevData) => ({
      ...prevData,
      workExperience: allJobs,
    }));
  };

  const addJob = () => {
    // gotta make sure there is some fallback data in case all jobs are removed from localstorage
  }

  return (
    <div className="work-experience">
      <div className="title-holder">
        <h3>WORK EXPERIENCE</h3>

      </div>
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
          <button className="remove-section-button" onClick={() => removeJob(index)}>X</button>
        </div>
      ))}
    </div>
  );
}