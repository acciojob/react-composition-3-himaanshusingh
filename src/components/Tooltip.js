import React from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
