import { useContext } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "../EditableText";
import AddSectionButton from "../../Buttons/AddSectionButton";
import RemoveSectionButton from "../../Buttons/RemoveSectionButton";
import { v4 as uuidv4 } from "uuid";
import "../../css/languages.css";
import "../../css/nested-sections.scss";

export default function Languages() {
  const { cvData, setCvData } = useContext(CvDataContext);

  const addLanguagesItem = () => {
    console.log("adding");
    const allItems = cvData.languages.slice();
    allItems.push({
      key: uuidv4(),
      description: "language",
    });
    setCvData((prevData) => ({ ...prevData, languages: allItems }));
  };

  const removeLanguagesItem = (index) => {
    const allItems = cvData.Languages.slice();
    allItems.splice(index, 1);
    setCvData((prevData) => ({
      ...prevData,
      languages: allItems,
    }));
  };

  return (
    <div className="languages">
      <div className="title-holder">
        <h3>LANGUAGES</h3>
        <AddSectionButton onClick={addLanguagesItem} />
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
            <RemoveSectionButton onClick={() => removeLanguagesItem(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
