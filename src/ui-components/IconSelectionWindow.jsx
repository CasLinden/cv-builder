import select from "/src/assets/skillicons/select.svg";

export default function IconSelectionWindow({
  index,
  icons,
  handleIconSelection,
  handleSvgUpload,
}) {
  return (
    <div className="icon-selection-window" style={{ position: "absolute" }}>
      <button className="select-previous-icons">{`<`}</button>
      {/* show available icons */}
      <div className="selectable-icons-view">
        <div className="selectable-icons">
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
      <button className="select-next-icons">{`>`}</button>
    </div>
  );
}
