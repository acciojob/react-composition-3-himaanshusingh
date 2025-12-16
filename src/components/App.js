import React from "react";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <Tooltip text="Hover over me" children="This is a tooltip" />
      <Tooltip text="Hover over me to see another tooltip" children="This is another tooltip" />
    </div>
  ); // prettier-ignore
};

export default App;
