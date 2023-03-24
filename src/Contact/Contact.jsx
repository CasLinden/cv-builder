import '../css/contact.css'
import ContactItem from "./ContactItem";
import phone from "../assets/contacticons/phone.svg"
import email from "../assets/contacticons/email.svg"
import website from "../assets/contacticons/website.svg";
import gitHub from "../assets/contacticons/github.svg";
import address from "../assets/contacticons/address.svg";

export default function Contact({ me, editMe }) {
  return (
    <div className="contact">
      <ContactItem me={me} editMe={editMe} content="phone" icon={phone}></ContactItem>
      <ContactItem me={me} editMe={editMe} content="email" icon={email}></ContactItem>
      <ContactItem me={me} editMe={editMe} content="website" icon={website}></ContactItem>
      <ContactItem me={me} editMe={editMe} content="gitHub" icon={gitHub}></ContactItem>
      <ContactItem me={me} editMe={editMe} content="address" icon={address}></ContactItem>
    </div>
  );
}


     
       