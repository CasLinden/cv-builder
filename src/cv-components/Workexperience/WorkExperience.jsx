import { useContext } from "react";
import { CvDataContext } from "../../CvDataContext";
import EditableText from "../EditableText";
import { v4 as uuidv4 } from 'uuid';
import "../../css/nested-sections.css";
import "../../css/work-experience.css";

export default function WorkExperience() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const removeJob = (index) => {
    console.log(index)
    const allJobs = cvData.workExperience.slice();
    allJobs.splice(index, 1);
    setCvData((prevData) => ({
      ...prevData,
      workExperience: allJobs,
    }));
  };

  const addJob = () => {
    const allJobs = cvData.workExperience.slice();
    const index = allJobs.length + 1;
    allJobs.push({
      key: uuidv4(),
      jobTitle: `job${index}`,
      companyName: "Some British broadcaster",
      period: "20XX - 20XX",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a tenetur velit nihil est dolore similique deserunt maioresad quam doloremque dolorem voluptate corrupti tempore iure eaque, fugitlaudantium!",
    });
    setCvData((prevData) => ({
      ...prevData,
      workExperience: allJobs,
    }));
  };

  return (
    <div className="work-experience">
      <div className="title-holder">
        <h3>WORK EXPERIENCE</h3>
        <button className="add-section-button" onClick={() => addJob()}>
          +
        </button>
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
          <button
            className="remove-section-button"
            onClick={() => removeJob(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
