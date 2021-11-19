import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "../../a6/Build/HomeScreen/HomeScreen";

const Build = () => {
  return(
      <>
        <Route path="/a6/twitter/home"
               exact={true}
               component={HomeScreen}/>
          <Route path="/a6/twitter/explore"
                 exact={true}
                 component={ExploreScreen}/>
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