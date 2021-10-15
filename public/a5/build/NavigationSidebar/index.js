const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">
                        Home
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline">
                        Explore
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline">
                        Notification
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline">
                        Messages
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline">
                        Bookmarks
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a class="list-group-item" href="/">
                    <span class="fa fa-stack wd-fa-stack-shrink wd-fa-stack-align-left">
                        <i class="far fa-circle fa-stack-2x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x"></i>
                    </span>
                        <span class="d-none d-xl-inline">
                        More
                    </span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
