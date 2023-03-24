import '../css/header.css'


import EditableText from "../EditableText";
import ProfilePicture from "./Profilepicture";

function Header() {
  return (
      <div className="header">
        <div className="name-job-age">
          <EditableText
            label="Name"
            field="name"
            component={(props) => <h1 {...props} />}
          />
          <EditableText
            label="Job"
            field="job"
            component={(props) => <h2 {...props} />}
          />
          <EditableText
            label="Age"
            field="age"
            component={(props) => <span {...props} />}
          />
        </div>
          <ProfilePicture></ProfilePicture>
      </div>
  );
}

export default Header;