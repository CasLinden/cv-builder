import Name from "./Name"
import Job from "./Job"
import Age from "./Age";
import '../css/header.css'
import ProfilePicture from "./ProfilePicture";

export default function Header({ me, editMe }) {
  
  return (
    <div className="header">
      <div>
        <Name me={me} editMe={editMe}></Name>
        <Job me={me} editMe={editMe}></Job>
        <Age me={me} editMe={editMe}></Age>
      </div>
      <ProfilePicture></ProfilePicture>
    </div>
  );
}