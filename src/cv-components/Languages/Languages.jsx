import { useContext } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "../EditableText";
import AddSectionButton from "../../buttons/AddSectionButton";
import RemoveSectionButton from "../../buttons/RemoveSectionButton";
import { addRemove } from "../../utils/addRemove";
import "../../css/languages.css";
import "../../css/nested-sections.scss";

export default function Languages() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const { add, remove } = addRemove();

  const addLanguage = () => {
    add("languages");
  };

  const removeLanguage = (index) => {
    remove("languages", index);
  };

  return (
    <div className="languages">
      <div className="title-holder">
        <h3>LANGUAGES</h3>
        <AddSectionButton onClick={addLanguage} />
      </div>
      {cvData.languages.map((item, index) => (
        <div className="language-item" key={index}>
          <div className="section-header language-section-header">
            <EditableText
              field="languages"
              component={(props) => <h4 {...props} />}
              index={index}
              nestedField="language"
            />
            <EditableText
              field="languages"
              component={(props) => <h5 {...props} />}
              index={index}
              nestedField="description"
            />
          </div>
          <div className="button-container">
            <RemoveSectionButton onClick={() => removeLanguage(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
