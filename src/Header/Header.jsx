import Name from "./Name"
import Job from "./Job"
import Age from "./Age";
import '../css/header.css'
import ProfilePicture from "./Profilepicture";
import RandoButton from "../RandoButton";

export default function Header({ me, editMe }) {
  return (
    <div className="header">
      <div className="name-job-age">
        <Name me={me} editMe={editMe}></Name>
        <Job me={me} editMe={editMe}></Job>
        <Age me={me} editMe={editMe}></Age>
        <RandoButton user={me}></RandoButton>
      </div>
      <ProfilePicture></ProfilePicture>
    </div>
  );
}