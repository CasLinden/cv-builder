import { useContext } from "react";
import { CvDataContext } from "/src/contexts/CvDataContext";
import EditableText from "/src/ui-components/EditableText";
import Icon from "/src/ui-components/Icon";
import AddSectionButton from "/src/buttons/AddSectionButton";
import RemoveSectionButton from "/src/buttons/RemoveSectionButton";
import { addRemove } from "/src/utils/addRemove";
import "/src/css/contact.css";
import "/src/css/nested-sections.scss";

export default function Contact() {
  const { cvData } = useContext(CvDataContext);
  
  
  const { add, remove } = addRemove();

  const addContactItem = () => {
    add("contact");
  };

  const removeContactItem = (index) => {
    remove("contact", index);
  };

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
