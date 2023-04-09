import { useContext, useState, useEffect } from "react";
import { CvDataContext } from "/src/contexts/CvDataContext";
import { IconsContext } from "/src/contexts/IconsContext";
import { v4 as uuidv4 } from "uuid";
import IconSelectionWindow from "/src/ui-components/IconSelectionWindow";
import "/src/css/icon.css"

export default function Icon({icon, index, section}) {
  const { cvData, setCvData } = useContext(CvDataContext);
  const { icons, setIcons } = useContext(IconsContext)
  const [showIconSelector, setShowIconSelector] = useState(false);
  const [SelectedIconIndex, setSelectedIconIndex] = useState(null);


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
    console.log(`handleUpload running with index: ${index}`)
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newIcons = { ...icons };
        const base64Icon = e.target.result;
        const key = uuidv4()
        newIcons[`${key}`] = base64Icon;
        setIcons(newIcons);
        handleIconSelection(`${key}`);
        console.log(icons)
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