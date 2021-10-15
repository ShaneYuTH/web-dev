import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
          <div>
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
                            <a class="wd-setting-align-left" href="explore-settings.html">
                                <i class="fas fa-cog text-white"></i>
                            </a>
                        </div>
                    </div>
                           <!-- search field and cog -->
               </div>
               <ul class="nav mb-2 nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">
                                <span class="wd-underline">
                                    Active
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Sports</a>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link text-secondary" href="#">Entertainment</a>
                        </li>
                          <!-- tabs -->
               </ul>
               <!-- image with overlaid text -->
               <div class="col-12">
                    <div class="wd-container">
                        <img src="../../images/Starship-Mk1-Day.jpg" class="img-responsive" width="100%">
                            <div class="wd-bottom-left fa-2x fw-bolder">SpaceX's StarShip</div>
                    </div>
                </div>

                ${PostSummaryList()}            
          </div>

    `);
}
export default ExploreComponent;
