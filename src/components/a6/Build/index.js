import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Build = () => {
  return(
      <>
        <ExploreScreen/>
        <Link to="/a6/hello">
          Hello
        </Link>|
        <Link to="/a6/practice">
          Practice
        </Link>|
        <Link to="/history">
          History
        </Link>
      </>
  );
};

export default Build;