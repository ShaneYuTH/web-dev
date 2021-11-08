import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
  return(
      <>
          <h1>Practice</h1>
          <Link to="/a8/twitter/home">
            Build
          </Link>|
          <Link to="/history">
            History
          </Link>|
          <Link to="/history/react">
              Previous React
          </Link>
          <ReduxExamples/>
      </>
  );

};

export default Practice;