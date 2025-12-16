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
      <h1 onMouseOver={handleOver} onMouseOut={handleOut}>{text}</h1>
      <p>{childrenText}</p>
    </>
  ); // prettier-ignore
};
