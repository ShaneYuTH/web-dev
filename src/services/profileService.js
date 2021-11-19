const PROFILE_API = 'https://radiant-bayou-49942.herokuapp.com/api/profile';

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