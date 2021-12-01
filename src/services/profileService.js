const PROFILE_API = 'http://localhost:4000/rest/profile';

export const fetchProfile = (dispatch) => {
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-profile',
                profile
            })
        );
}

export const updateProfile = (dispatch, profile) => {
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'update-profile',
                profile
            })
        );
}