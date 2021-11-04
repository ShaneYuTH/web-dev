import React from "react";
import NavigationItem from "./NavigationItem.js";
import navlink from "./navlinks.json";

const NavigationSidebar = () => {
    return(
        <>
            <div className="list-group">
                {
                    navlink.map(navlink => {
                        return (<NavigationItem navlink={navlink}/>);
                    })
                }
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
