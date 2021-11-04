import React from "react";
import './profile.css';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const selectUser = (state) => state.profile;

const ProfileHeader = () => {
    const owner = useSelector(selectUser);

    return(
        <>
            <div className="row">
                <div className="col-2 align-self-center">
                    <i className="fas fa-arrow-left text-white ms-3"/>
                </div>
                <div className="col-10">
                    <div className="row fw-bolder text-white">
                        {owner.firstName} {owner.lastName}
                    </div>
                    <div className="row text-secondary">
                        {owner.tweetsCount} Tweets
                    </div>
                </div>

            </div>
            <div className="has-bg-img">
                <img className="bg-img img-fluid" src={owner.bannerPicture} alt="background"/>
            </div>
            <div className="row">
                <div className="col-9">
                    <img className="rounded-circle img-fluid wd-profile-avatar-image" src={owner.profilePicture} alt="profilePic"/>
                    <div className="wd-profile-text">
                        <div className="row fw-bolder text-white">
                            {owner.firstName} {owner.lastName}
                        </div>
                        <div className="row text-secondary">
                            @{owner.handle}
                        </div>
                    </div>

                </div>
                <div className="col-3 py-2 px-3">
                    <NavLink exact to={"/a7/twitter/profile-edit"}>
                        <button
                            className="btn btn-outline-secondary rounded-pill bg-transparent text-white fw-bolder text-nowrap">
                            Edit profile
                        </button>
                    </NavLink>
                </div>


            </div>
        </>

    );
}

export default ProfileHeader;