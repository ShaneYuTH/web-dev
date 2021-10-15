import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <div class="list-group-item">
                    <span class="fw-bolder wd-fa-icon-larger m-1">
                        Who to follow
                    </span>
                </div>
                ${
                    who.map(who=>{
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
            </ul>
`); }
export default WhoToFollowList;