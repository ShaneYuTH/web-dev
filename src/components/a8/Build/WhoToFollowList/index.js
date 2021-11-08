import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWhos = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWhos)
    return (
            <ul className="list-group">
                <div className="list-group-item">
                    <span className="fw-bolder wd-fa-icon-larger m-1">
                        Who to follow
                    </span>
                </div>
                {
                    who.map(who=>{
                        return(<WhoToFollowListItem who={who}/>);
                    })
                }
            </ul>
    );
}

export default WhoToFollowList;