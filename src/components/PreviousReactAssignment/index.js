import React from "react";
import {Link} from "react-router-dom";

const PreviousReactAssignment = () => {
    return(
        <>
            <h2>React Assignments</h2>
            <h3>A6 Practice</h3>
            <Link to="/a6/practice">A6</Link>|
            <h3>A7 Practice</h3>
            <Link to="/a7/practice">A7</Link>|
            <h3>A8 Practice</h3>
            <Link to="/a8/practice">A8</Link>|
            <Link to="/">Back</Link>
        </>
    );
};

export default PreviousReactAssignment;