import EditableText from "/src/ui-components/EditableText";
import "/src/css/profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="title-holder">
        <h3>PROFILE</h3>
      </div>
      <EditableText field="profile" component={(props) => <span {...props} />} />
    </div>
  );
}
