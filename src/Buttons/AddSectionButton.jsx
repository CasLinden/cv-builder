import React from "react";

export default function AddSectionButton({ onClick, index }) {
  return (
      <button className="add-section-button" index={index} onClick={onClick}>
        +
      </button>
  );
}
