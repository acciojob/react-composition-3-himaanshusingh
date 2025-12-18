import React, { useState, useEffect } from "react";

const Tooltip = ({ text, children }) => {
  const [toolTipText, setText] = useState("");

  return (
    <>
      {toolTipText && <h2 className="tooltip">{text}</h2>}
      <p className="tooltip tooltiptext" onMouseEnter={() => setText(text)} onMouseLeave={() => setText("")}>{children}</p>
    </>
  ); // prettier-ignore
};

export default Tooltip;
