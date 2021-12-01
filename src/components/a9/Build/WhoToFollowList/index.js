import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {findAllWho} from "../../services/whoService"

const WhoToFollowList = () => {
    const [whos, setWhos] = useState([]);
    useEffect(() =>
        findAllWho()
            .then(whos => setWhos(whos)), []);
    return (
            <ul className="list-group">
                <div className="list-group-item">
                    <span className="fw-bolder wd-fa-icon-larger m-1">
                        Who to follow
                    </span>
                </div>
                {
                    whos.map(who=>{
                        return(<WhoToFollowListItem who={who}/>);
                    })
                }
            </ul>
    );
}

export default WhoToFollowList;
