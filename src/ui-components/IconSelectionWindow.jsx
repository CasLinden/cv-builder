import select from "/src/assets/skillicons/select.svg";
import { useState } from "react";
import { chunkArray } from "/src/utils/chunkArray";
export default function IconSelectionWindow({
  index,
  icons,
  handleIconSelection,
  handleSvgUpload,
}) {
  const [iconView, setIconView] = useState(0);

  const viewWidth = () => {
    return document.querySelector(".selectable-icons-view").offsetWidth;
  };

  const maxWidth = () => {
    return Math.ceil(iconColumns.length / 7) * viewWidth()
  } 

  const scrollLeft = () => {
    if (iconView < 0) {
      setIconView((prevScrollPosition) => prevScrollPosition + viewWidth());
    }
  };

  const scrollRight = () => {
    if (iconView - 180 > maxWidth() * -1 ){
      
    setIconView((prevScrollPosition) => prevScrollPosition - viewWidth());
    }
  };

  const iconColumns = chunkArray(Object.keys(icons), 2);

  return (
    <div className="icon-selection-window" style={{ position: "absolute" }}>
      <button
        onClick={scrollLeft}
        className="select-previous-icons"
      >{`<`}</button>
      {/* ↓↓↓ show available icons ↓↓↓ */}
      <div className="selectable-icons-view">
        <div
          className="selectable-icons"
          style={{
            transform: `translateX(${iconView}px)`,
            maxWidth: `${maxWidth}px`,
          }}
        >
          {iconColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="icon-column">
              {column.map((iconName) => (
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
          ))}
        </div>
      </div>
      {/* ↓↓↓ show UPLOAD NEW  SVG Button ↓↓↓ */}
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
