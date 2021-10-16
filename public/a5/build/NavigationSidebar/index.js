import NavigationItem from "./NavigationItem.js";
import navlink from "./navlinks.js";

const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                ${
                    navlink.map(navlink=>{
                        return(NavigationItem(navlink));
                    }).join('')
                }
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
