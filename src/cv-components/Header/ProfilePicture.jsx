import { useState, useRef } from "react";
import avatar from "/src/assets/avatar.svg";
import "/src/css/picture.css";

export default function ProfilePicture({ me }) {
  const [image, setImage] = useState(avatar);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const inputRef = useRef(null); // Create a ref for the input element

  const handleClick = () => {
    inputRef.current.click(); // Trigger the click method of the input element
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="picture-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Add an onClick event handler for the profile picture
    >
      <label htmlFor="file-input">
        <img className="profile-picture" src={image} alt="Selected Image" />
      </label>
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={inputRef} // Assign the ref to the input element
      />
      {isHovering && <span className="tooltip">Upload file</span>}
    </div>
  );
}
