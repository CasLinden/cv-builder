import { useContext, useState, useEffect } from "react";
import { CvDataContext } from "/src/CvDataContext";
import react from "/src/assets/skillicons/react.svg";
import js from "/src/assets/skillicons/js.svg";
import jest from "/src/assets/skillicons/jest.svg";
import git from "/src/assets/skillicons/git.svg";
import css from "/src/assets/skillicons/css.svg";
import select from "/src/assets/skillicons/select.svg";
import "/src/css/icon.css"


export default function Icon({skill, index}) {
  const { cvData, setCvData } = useContext(CvDataContext);
  const [showIconSelector, setShowIconSelector] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
  const [icons, setIcons] = useState(() => {
    // Check if the `icons` prop is available in `cvData`
    if (cvData && cvData.icons) {
      return cvData.icons;
    } else {
      // If `icons` prop is not available, use the default data below
      return {
        js: js,
        react: react,
        git: git,
        jest: jest,
        css: css,
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
    setSelectedSkillIndex(index);
    setShowIconSelector(true);
  };

  const handleIconSelection = (iconName) => {
    const allSkills = cvData.skills.slice();
    allSkills[selectedSkillIndex].icon = iconName;
    setCvData((prevData) => ({
      ...prevData,
      skills: allSkills,
    }));
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
      src={getIcon(skill.icon)}
      alt=""
    />
     {showIconSelector === true &&
     selectedSkillIndex === index &&
     iconSelectionWindow(index)} 
  </div>
   
  )
}
