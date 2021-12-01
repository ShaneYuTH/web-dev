const PROFILE_API = 'http://localhost:4000/rest/profile';

// export const fetchProfile = (dispatch) => {
//     fetch(PROFILE_API)
//         .then(response => response.json())
//         .then(profile =>
//             dispatch({
//                 type: 'fetch-profile',
//                 profile
//             })
//         );
// }

export const findAllProfile = () =>
    fetch(PROFILE_API)
        .then(response => response.json());

export const findProfileById = (id) =>
    fetch(`${PROFILE_API}/${id}`)
        .then(response => response.json());

export const updateProfileById = (profile) =>
    fetch(`${PROFILE_API}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export default {
    findAllProfile, findProfileById, updateProfileById
}