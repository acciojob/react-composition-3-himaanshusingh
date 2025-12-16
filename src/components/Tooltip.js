import React, { useState, useEffect } from "react";

const Tooltip = ({ text, children }) => {
  const [toolTipText, setText] = useState("");

  function handleOver() {
    setText(text);
  }

  function handleOut() {
    setText("");
  }

  return (
    <>
      <h2 className="tooltip" onMouseEnter={handleOver} onMouseLeave={handleOut}><div>{children}</div></h2>
      {toolTipText && <p className="tooltip tooltiptext"><div>{toolTipText}</div></p>}
    </>
  ); // prettier-ignore
};

export default Tooltip;
