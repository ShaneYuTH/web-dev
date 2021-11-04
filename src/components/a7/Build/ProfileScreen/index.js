import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import ProfileHeader from "../ProfileHeader";

const ProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ProfileHeader/>
                <TweetList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 xol-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>

    );
}

export default ProfileScreen;