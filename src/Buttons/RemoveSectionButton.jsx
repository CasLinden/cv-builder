import React from "react";

export default function RemoveSectionButton({ onClick, index }) {
  return (
      <button className="remove-section-button" onClick={() => onClick(index)}>
        -
      </button>
  );
}
