import React, { useState, useEffect } from "react";

const Tooltip = ({ text, children }) => {
  const [childrenText, setChildrenText] = useState("");

  function handleOver() {
    setChildrenText(children);
  }

  function handleOut() {
    setChildrenText("");
  }

  return (
    <div>
      <h2 className="tooltip" onMouseEnter={handleOver} onMouseLeave={handleOut}>{text}</h2>
      <p className="tooltip">{childrenText}</p>
    </div>
  ); // prettier-ignore
};

export default Tooltip;
