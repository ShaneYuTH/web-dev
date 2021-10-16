import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
           <div class="row">
                <div class="row d-flex align-items-center pt-2 px-1">
                    <div class="col-11">
                        <div class="form-group wd-has-search rounded-pill ps-1 bg-dark">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text"
                                   class="form-control bg-dark"
                                   placeholder="Search Twitter">
                        </div>
                    </div>
                    <div class="col-1">
                        <a class="wd-setting-align" href="explore-settings.html">
                            <i class="fas fa-cog fa-2x"></i>
                        </a>
                    </div>
                </div>
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link font-weight-bold active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link font-weight-bold" href="#">Entertainment</a>
                </li>
                  <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           <div class="col-12 px-0">
                <div class="wd-container">
                    <img src="../../images/Starship-Mk1-Day.jpg" class="img-fluid">
                    <div class="wd-bottom-left fa-2x fw-bolder">SpaceX's StarShip</div>
                </div>
            </div>
    
            ${PostSummaryList()}

    `);
}
export default ExploreComponent;
