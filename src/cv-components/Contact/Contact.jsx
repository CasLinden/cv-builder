import { useContext } from "react";
import { CvDataContext } from "/src/CvDataContext";
import EditableText from "../EditableText";
import Icon from "/src/Icons/Icon";
import AddSectionButton from "../../Buttons/AddSectionButton";
import RemoveSectionButton from "../../Buttons/RemoveSectionButton";
import { v4 as uuidv4 } from "uuid";
import "../../css/contact.css";
import "../../css/nested-sections.scss";

export default function Contact() {
  const { cvData, setCvData } = useContext(CvDataContext);
  
  const addContactItem = () => {
    console.log("adding")
    const allItems = cvData.contact.slice();
    allItems.push({
      key: uuidv4(),
      icon: "phone",
      description: "contact info",
    });
    setCvData((prevData) => ({ ...prevData, contact: allItems }));
  }

  const removeContactItem = (index) => {
    const allItems = cvData.contact.slice();
    allItems.splice(index, 1);
    setCvData((prevData) => ({
      ...prevData,
      contact: allItems,
    }));
  }

  return (
    <div className="contact">
      <AddSectionButton onClick={() => addContactItem()}/>
      {cvData.contact.map((item, index) => (
        <div className="contact-item" key={index}>
          <Icon icon={item.icon} index={index} section="contact"/>
          <EditableText
            field="contact"
            component={(props) => <span {...props} />}
            index={index}
            nestedField="description"
          />
          <div className="button-container">
            <RemoveSectionButton onClick={() => removeContactItem(index)}/>
          </div>
        </div>
      ))}
    </div>
  );
}
