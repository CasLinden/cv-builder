import Phone from "./Phone";
import Email from "./Email";
import Website from "./Website";
import Github from "./Github";
import Address from "./Address";
import '../css/contact.css'
import ContactItem from "./ContactItem";

export default function Contact({ me, editMe }) {
  console.log(me)
  return (
    <div className="contact">
      <Phone me={me} editMe={editMe}></Phone>
      <Email me={me} editMe={editMe}></Email>
      <Website me={me} editMe={editMe}></Website>
      <Github me={me} editMe={editMe}></Github>
      <Address me={me} editMe={editMe}></Address> 
    </div>
  );
}


     
       