import { useContext, useState, useEffect } from "react";
import { CvDataContext } from "/src/CvDataContext";
import IconSelectionWindow from "/src/ui-components/IconSelectionWindow";
import react from "/src/assets/skillicons/react.svg";
import js from "/src/assets/skillicons/js.svg";
import jest from "/src/assets/skillicons/jest.svg";
import git from "/src/assets/skillicons/git.svg";
import css from "/src/assets/skillicons/css.svg";
import webpack from "/src/assets/skillicons/webpack.svg";
import node from "/src/assets/skillicons/node.svg";
import chatgpt from "/src/assets/skillicons/chatgpt.svg";
import phone from "/src/assets/contacticons/phone.svg"
import email from "/src/assets/contacticons/email.svg"
import website from "/src/assets/contacticons/website.svg";
import gitHub from "/src/assets/contacticons/github.svg";
import address from "/src/assets/contacticons/address.svg";
import "/src/css/icon.css"

export default function Icon({icon, index, section}) {
  const { cvData, setCvData } = useContext(CvDataContext);
  const [showIconSelector, setShowIconSelector] = useState(false);
  const [SelectedIconIndex, setSelectedIconIndex] = useState(null);
  const [icons, setIcons] = useState(() => {
    const storedIcons = localStorage.getItem("icons");
    return storedIcons // If there are Icons in local storage, use it
      ? JSON.parse(storedIcons) // If there are no icons in local storage, use the default icons below
      :  {
        phone: phone,
        email: email,
        website: website,
        gitHub: gitHub,
        address: address,
        js: js,
        react: react,
        git: git,
        jest: jest,
        css: css,
        webpack: webpack,
        node: node,
        chatgpt: chatgpt,
      };
    });

  useEffect(() => {
    localStorage.setItem("icons", JSON.stringify(icons));
  }, [icons]);

  const getIcon = (title) => {
    if (icons.hasOwnProperty(title)) {
      return icons[title];
    }
    return icons.select;
  };

  const differentIcon = (index, event) => {
    event.stopPropagation(); // Event was bubbling up to parent container, instantly calling handleClickOutside
    setSelectedIconIndex(index);
    setShowIconSelector(true);
    document.addEventListener('click', handleClickOutside);
  };

  const handleIconSelection = (iconName) => {
    const newCvData = { ...cvData };

    if (section === "skills") {
      const allSkills = newCvData.skills.slice();
      allSkills[SelectedIconIndex].icon = iconName;
      newCvData.skills = allSkills;
    } else if (section === "contact") {
      const allContactInfo = newCvData.contact.slice();
      allContactInfo[SelectedIconIndex].icon = iconName;
      newCvData.contact = allContactInfo;
    }

    setCvData(newCvData);
    setShowIconSelector(false);
    document.removeEventListener('click', handleClickOutside);
  };

  const handleSvgUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newIcons = { ...icons };
        const base64Icon = e.target.result;
        newIcons[`custom-${index}`] = base64Icon;
        setIcons(newIcons);
        handleIconSelection(`custom-${index}`);
      };
      reader.readAsDataURL(file);
    }
    document.removeEventListener('click', handleClickOutside);
  };

  const handleClickOutside = (event) => {
    const iconWindow = document.querySelector('.icon-selection-window');
    if (iconWindow && !iconWindow.contains(event.target)) {
      setShowIconSelector(false);
      setSelectedIconIndex(null);
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const iconSelectionWindow = (index) => {
    return (
      <IconSelectionWindow
        index={index}
        icons={icons}
        handleIconSelection={handleIconSelection}
        handleSvgUpload={handleSvgUpload}
      />
    );
  };

  return (
    <div className="icon-container">
    <img
      onClick={(event) => differentIcon(index, event)}
      src={getIcon(icon)}
      alt={`${icon} icon`}
    />
     {showIconSelector === true &&
     SelectedIconIndex === index &&
     iconSelectionWindow(index)} 
  </div>
  )
}