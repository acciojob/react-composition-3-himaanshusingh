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
      <h1 onMouseEnter={handleOver} onMouseLeave={handleOut}>{text}</h1>
      <p>{childrenText}</p>
    </>
  ); // prettier-ignore
};

export default Tooltip;
