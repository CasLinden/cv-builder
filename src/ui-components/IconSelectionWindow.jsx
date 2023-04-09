import select from "/src/assets/skillicons/select.svg";
import { useState } from "react";
export default function IconSelectionWindow({
  index,
  icons,
  handleIconSelection,
  handleSvgUpload,
}) {

  const [iconView, setIconView] = useState(0)

  const viewWidth = () => {
    return document.querySelector('.selectable-icons-view').offsetWidth
  }
  
  const scrollLeft = () => {

    if (iconView < 0){
    setIconView((prevScrollPosition) => prevScrollPosition + viewWidth()); 
    }
  };

  const scrollRight = () => {
    setIconView((prevScrollPosition) => prevScrollPosition - viewWidth());
  };

  
  return (
    <div className="icon-selection-window" style={{ position: "absolute" }}>
      <button onClick={scrollLeft} className="select-previous-icons">{`<`}</button>
      {/* show available icons */}
      <div className="selectable-icons-view">
        <div className="selectable-icons" style={{ transform: `translateX(${iconView}px)` }}>
          {Object.keys(icons).map((iconName) => (
            <div
              key={iconName}
              className="icon-tile"
              onClick={() => {
                handleIconSelection(iconName);
              }}
            >
              <img src={icons[iconName]} alt={iconName} />
            </div>
          ))}
        </div>
      </div>
      {/* show  NEW Button */}
      <label htmlFor={`select-icon-${index}`} className="upload-new-icon-label">
        <button className="upload-new-icon">
          <img src={select} alt="add icon" />
          UPLOAD SVG
        </button>
        <input
          id={`select-icon-${index}`}
          type="file"
          accept=".svg"
          onChange={(event) => {
            handleSvgUpload(event, index);
          }}
        />
      </label>
      <button onClick={scrollRight} className="select-next-icons">{`>`}</button>
    </div>
  );
}