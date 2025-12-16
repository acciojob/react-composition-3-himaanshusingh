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
    <>
      <h2 className="tooltip" onMouseEnter={handleOver} onMouseLeave={handleOut}><div>{text}</div></h2>
      <p className="tooltip"><div>{childrenText}</div></p>
    </>
  ); // prettier-ignore
};

export default Tooltip;
