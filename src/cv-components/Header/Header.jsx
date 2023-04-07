import '/src/css/header.css'
import EditableText from "../single-html-components/EditableText";
import ProfilePicture from "./ProfilePicture";

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
        </div>
          <ProfilePicture></ProfilePicture>
      </div>
  );
}

export default Header;