import EditableText from "../EditableText";

export default function ContactItem({field, icon}) {

  return (
    <div className="contact-item">
      <div className="icon-container">
        <img src={icon} alt={`${field} icon`} />
      </div>
      <EditableText
        field={field}
        component={(props) => <span {...props} />}
      />
    </div>
  );
}
