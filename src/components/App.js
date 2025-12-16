import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text="This is another tooltip" children="This is a tooltip" />
    </div>
  ); // prettier-ignore
};

export default App;
