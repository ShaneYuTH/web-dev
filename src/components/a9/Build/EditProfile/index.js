import React, {useEffect, useState} from "react";
import './profile.css';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {findAllProfile, findProfileById, updateProfileById} from "../../services/profileService";

// const selectUser = (state) => state.profile;

const EditProfile = () => {

    // const owner = useSelector(selectUser);
    // useEffect(() => fetchProfile(dispatch), [])
    // const dispatch = useDispatch();

    const [owner, setOwner] = useState({}); // 1st render

    useEffect(() =>
        findProfileById("61a56df402bd1b434baf89af")
            .then(owner => setOwner(owner)),[]);


    // const [name, setName] = useState(owner.name);
    // const [bio, setBio] = useState(owner.bio);
    // const [location, setLocation] = useState(owner.location);
    // const [website, setWebsite] = useState(owner.website);
    // const [birthDate, setBirthDate] = useState(owner.dateOfBirth);


    const saveProfileClickHandler = () => {
        // updateProfile(dispatch, {
        //     ...owner,
        //     name: name,
        //     bio: bio,
        //     website: website,
        //     location: location,
        //     dateOfBirth: birthDate,
        // });
        updateProfileById(owner).then(r => console.log(r));
    }

    // const updateMovie = (event) =>
    //     setMovie({...movie, title: event.target.value});

    const updateName = (e) =>
        // setName(e.target.value);
        setOwner({...owner, name: e.target.value});

    const updateBio = (e) =>
        //setBio(e.target.value);
        setOwner({...owner, bio: e.target.value});

    const updateLocation = (e) =>
        //setLocation(e.target.value);
        setOwner({...owner, location: e.target.value});

    const updateWebsite = (e) =>
        //setWebsite(e.target.value);
        setOwner({...owner, website: e.target.value});

    const updateDateOfBirth = (e) =>
        //setDateOfBirth(e.target.value);
        setOwner({...owner, dateOfBirth: e.target.value});

    return(
        <>
            <div className="row align-items-center fs-5">
                <NavLink exact to={"/a9/twitter/profile"} className="col-2">
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
                       defaultValue= {owner.name}
                       onChange={updateName}
                />
                    <label htmlFor="floatingInputValue">Name</label>
            </div>
            <div className="form-floating my-5">
                <textarea className="form-control wd-bio-text bg-transparent text-white border-1 border-secondary" placeholder="Bio" id="floatingTextarea2"
                    defaultValue={owner.bio} style={{height: "100px"}}
                          onChange={updateBio}
                />
                <label htmlFor="floatingTextarea2">Bio</label>
            </div>
            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Location"
                       defaultValue= {owner.location}
                       onChange={updateLocation}
                />
                <label htmlFor="floatingInputValue">Location</label>
            </div>
            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Website"
                       defaultValue= {owner.website}
                       onChange={updateWebsite}
                />
                <label htmlFor="floatingInputValue">Website</label>
            </div>
            <div className="form-floating mb-5">
                <input type="text" className="form-control bg-transparent text-white border-1 border-secondary" id="floatingInputValue" placeholder="Birth date"
                       defaultValue={owner.dateOfBirth}
                       onChange={updateDateOfBirth}
                />
                <label htmlFor="floatingInputValue">Birth date</label>
            </div>
        </>

    );
}

export default EditProfile;