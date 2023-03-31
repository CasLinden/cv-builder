import EditableText from "../EditableText";
import "/src/css/profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <h3>PROFILE</h3>
      <EditableText field="profile" component={(props) => <span {...props} />} />
    </div>
  );
}
