import { useContext } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "/src/ui-components/EditableText";
import RemoveSectionButton from "/src/Buttons/RemoveSectionButton";
import AddSectionButton from "/src/Buttons/AddSectionButton";
import { addRemove } from "/src/utils/addRemove";
import "/src/css/nested-sections.scss";
import "/src/css/work-experience.css";

export default function WorkExperience() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const { add, remove } = addRemove();

  const addJob = () => {
    add("workExperience");
  };

  const removeJob = (index) => {
    remove("workExperience", index);
  };

  return (
    <div className="work-experience">
      <div className="title-holder">
        <h3>EXPERIENCE</h3>
        <AddSectionButton onClick={addJob}></AddSectionButton>
      </div>
      <div className="sections-wrapper">
      {cvData.workExperience.map((job, index) => (
        <div className="work-experience-section" key={job.key}>
          <div className="section-header">
            <div className="heading-elements">
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
            </div>
            <div className="button-container">
              <RemoveSectionButton onClick={removeJob} index={index} />
            </div>
          </div>
          <EditableText
            field="workExperience"
            component={(props) => <p {...props} />}
            index={index}
            nestedField="jobDescription"
          />
        </div>
      ))}
      </div>
    </div>
  );
}
