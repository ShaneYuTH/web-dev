import React from "react";
import {Link} from "react-router-dom";

const PreviousReactAssignment = () => {
    return(
        <>
            <h2>React Assignments</h2>
            <h3>A6 Practice</h3>
            <Link to="/a6/practice">
                Practice
            </Link>|
            <Link to="/">
                Back
            </Link>
        </>
    );
};

export default PreviousReactAssignment;