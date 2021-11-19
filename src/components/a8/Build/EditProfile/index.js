import React, {useState} from "react";
import './profile.css';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {updateProfile} from "../../../../services/profileService";

const selectUser = (state) => state.profile;

const EditProfile = () => {
    const dispatch = useDispatch();
    const owner = useSelector(selectUser);

    const [name, setName] = useState(owner.name);
    const [bio, setBio] = useState(owner.bio);
    const [location, setLocation] = useState(owner.location);
    const [website, setWebsite] = useState(owner.website);
    const [birthDate, setBirthDate] = useState(owner.dateOfBirth);

    const saveProfileClickHandler = () => {
        updateProfile(dispatch, {
            ...owner,
            name: name,
            bio: bio,
            website: website,
            location: location,
            dateOfBirth: birthDate,
        });
    }

    return(
        <>
            <div className="row align-items-center fs-5">
                <NavLink exact to={"/a8/twitter/profile"} className="col-2">
                    <i className="fas fa-times text-white ms-3"/>
                </NavLink>
                <div className="col-8">
                    <div className="row fw-bolder text-white">
                        Edit profile
                    </div>
                </div>
                <div className="col-2 py-2 px-3">
                    <button onClick={saveProfileClickHandler}
                        className="btn btn-outline-secondary rounded-pill bg-transparent text-white fw-bolder text-nowrap">
                        Save
                    </button>
                </div>
            </div>
            <div className="has-bg-img">
                <img className="bg-img img-fluid" src={owner.bannerPicture} alt="background"/>
            </div>
            <div className="row">
                <div className="col-9">
                    <img className="rounded-circle img-fluid wd-profile-avatar-image" src={owner.profilePicture} alt="profilePic"/>
                </div>
            </div>

            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Name"
                       value= {name}
                       onChange={(event) => setName(event.target.value)}
                />
                    <label htmlFor="floatingInputValue">Name</label>
            </div>
            <div className="form-floating my-5">
                <textarea className="form-control wd-bio-text bg-transparent text-white border-1 border-secondary" placeholder="Bio" id="floatingTextarea2"
                    value={bio} style={{height: "100px"}}
                          onChange={(event) => setBio(event.target.value)}
                />
                <label htmlFor="floatingTextarea2">Bio</label>
            </div>
            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Location"
                       value= {location}
                       onChange={(event) => setLocation(event.target.value)}
                />
                <label htmlFor="floatingInputValue">Location</label>
            </div>
            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Website"
                       value= {website}
                       onChange={(event) => setWebsite(event.target.value)}
                />
                <label htmlFor="floatingInputValue">Website</label>
            </div>
            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Birth date"
                       value= {birthDate}
                       onChange={(event) => setBirthDate(event.target.value)}
                />
                <label htmlFor="floatingInputValue">Birth date</label>
            </div>
        </>

    );
}

export default EditProfile;