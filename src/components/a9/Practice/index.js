import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";

const Practice = () => {
  return(
      <>
          <h1>Practice</h1>
          <Link to="/a9/twitter/home">
            Build
          </Link>|
          <Link to="/history">
            History
          </Link>|
          <Link to="/history/react">
              Previous React
          </Link>
          <Movies/>
      </>
  );
};

export default Practice;