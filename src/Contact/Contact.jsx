import '../css/contact.css'
import ContactItem from "./ContactItem";
import phone from "../assets/contacticons/phone.svg"
import email from "../assets/contacticons/email.svg"
import website from "../assets/contacticons/website.svg";
import gitHub from "../assets/contacticons/github.svg";
import address from "../assets/contacticons/address.svg";

export default function Contact() {
  return (
    <div className="contact">
      <ContactItem field="phone" icon={phone}></ContactItem>
      <ContactItem field="email" icon={email}></ContactItem>
      <ContactItem field="website" icon={website}></ContactItem>
      <ContactItem field="gitHub" icon={gitHub}></ContactItem>
      <ContactItem field="address" icon={address}></ContactItem>
    </div>
  );
}


     
       