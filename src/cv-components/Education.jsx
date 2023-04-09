import { useContext } from "react";
import { CvDataContext } from "/src/contexts/CvDataContext";
import EditableText from "/src/ui-components/EditableText";
import RemoveSectionButton from "/src/Buttons/RemoveSectionButton";
import AddSectionButton from "/src/Buttons/AddSectionButton";
import { addRemove } from "/src/utils/addRemove";
import "/src/css/nested-sections.scss";
import "/src/css/education.css";

export default function Education() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const { add, remove } = addRemove();

  const addSchool = () => {
    add("education");
  };

  const removeSchool = (index) => {
    remove("education", index);
  };

  return (
    <div className="education">
      <div className="title-holder">
        <h3>EDUCATION</h3>
        <AddSectionButton onClick={addSchool}></AddSectionButton>
      </div>
      {cvData.education.map((school, index) => (
        <div className="education-section" key={school.key}>
          <div className="section-header">
            <div className="heading-elements">
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
            </div>
            <div className="button-container">
              <RemoveSectionButton
                index={index}
                onClick={removeSchool}
              ></RemoveSectionButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
