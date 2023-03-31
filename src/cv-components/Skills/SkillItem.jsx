import EditableText from "../EditableText";
import upload from "../../assets/skillicons/upload.svg";

export default function SkillItem({field, icon = null}) {

  return (
    <div className="skill-item">
      <div className="icon-container">
        <img src={icon || upload} alt={`${field} icon`} />
      </div>
      <EditableText
        field={field}
        component={(props) => <span {...props} />}
      />
    </div>
  );
}
