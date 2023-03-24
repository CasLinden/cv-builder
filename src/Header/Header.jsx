import '../css/header.css'
import EditableText from "../EditableText";
import ProfilePicture from "./Profilepicture";

function Header() {
  return (
      <div className="header">
        <div className="name-job-age">
          <EditableText
            field="name"
            component={(props) => <h1 {...props} />}
          />
          <EditableText
            field="job"
            component={(props) => <h2 {...props} />}
          />
          <EditableText
            field="age"
            component={(props) => <span {...props} />}
          />
        </div>
          <ProfilePicture></ProfilePicture>
      </div>
  );
}

export default Header;