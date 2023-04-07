import { useContext, useState, useEffect } from "react";
import { CvDataContext } from "/src/CvDataContext";
import react from "/src/assets/skillicons/react.svg";
import js from "/src/assets/skillicons/js.svg";
import jest from "/src/assets/skillicons/jest.svg";
import git from "/src/assets/skillicons/git.svg";
import css from "/src/assets/skillicons/css.svg";
import webpack from "/src/assets/skillicons/webpack.svg";
import node from "/src/assets/skillicons/node.svg";
import chatgpt from "/src/assets/skillicons/chatgpt.svg";
import select from "/src/assets/skillicons/select.svg";
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
    // Check if the `icons` prop is available in `cvData`
    if (cvData && cvData.icons) {
      return cvData.icons;
    } else {
      // If `icons` prop is not available, use the default data below
      return {
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
    }
  });

  useEffect(() => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      icons: icons,
    }));
  }, [icons]);

  const getIcon = (title) => {
    if (icons.hasOwnProperty(title)) {
      return icons[title];
    }
    return icons.select;
  };

  const differentIcon = (index) => {
    setSelectedIconIndex(index);
    setShowIconSelector(true);
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
  };

  const iconSelectionWindow = (index) => (
    <div className="icon-selection-window" style={{ position: "absolute" }}>
      {Object.keys(icons).map((iconName) => (
        <div
          key={iconName}
          className="icon-tile"
          onClick={() => handleIconSelection(iconName)}
        >
          <img src={icons[iconName]} alt={iconName} />
        </div>
      ))}
      <div className="icon-tile">
        <label htmlFor={`select-icon-${index}`}>
          <img src={select} alt="add icon" />
        </label>
        <input
          id={`select-icon-${index}`}
          type="file"
          accept=".svg"
          style={{ display: "none" }}
          onChange={(event) => handleSvgUpload(event, index)}
        />
      </div>
    </div>
  );

  return (
    <div className="icon-container">
    <img
      onClick={() => differentIcon(index)}
      src={getIcon(icon)}
      alt={`${icon} icon`}
    />
     {showIconSelector === true &&
     SelectedIconIndex === index &&
     iconSelectionWindow(index)} 
  </div>
  )
}