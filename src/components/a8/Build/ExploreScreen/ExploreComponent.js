import React from "react";
import "./explore.css"
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = (
    {
        explore = {
            topic: "SpaceX's StarShip",
            image: "/images/Starship-Mk1-Day.jpg" 
        }
    }) => {
    return (
        <>
            <div className="row">
                <div className="row d-flex align-items-center pt-2 px-1">
                    <div className="col-11">
                        <div className="form-group wd-has-search rounded-pill ps-1 bg-dark">
                            <span className="fa fa-search form-control-feedback"/>
                            <input type="text"
                                   className="form-control bg-dark"
                                   placeholder="Search Twitter"/>
                        </div>
                    </div>
                    <div className="col-1">
                        <a className="wd-setting-align" href="explore-settings.html">
                            <i className="fas fa-cog fa-2x"/>
                        </a>
                    </div>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link font-weight-bold active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link font-weight-bold" href="#">Entertainment</a>
                </li>
            </ul>

            <div className="col-12 px-0">
                <div className="wd-container">
                    <img src={explore.image} className="img-fluid" alt={explore.topic}/>
                    <div className="wd-bottom-left fa-2x fw-bolder">{explore.topic}</div>
                </div>
            </div>

            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
