import {NavLink} from "react-router-dom";

const NavigationItem = (
    {
        navlink= {
            text: "Explore",
            link: "/a6/twitter/explore",
            iconClass: "fas fa-hashtag"
        }
    }) => {
    return(
        <NavLink exact to={navlink.link} className="list-group-item">
            <i className={navlink.iconClass}/>
            <span className="d-none d-xl-inline ms-2">
                {navlink.text}
            </span>
        </NavLink>
    );
}
export default NavigationItem;