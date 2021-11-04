import owner from './data/profile.json';

const profile = (state = owner, action) => {
    switch (action.type) {
        case 'change-profile':
            state.name = action.newName;
            state.bio = action.newBio;
            state.location = action.newLocation;
            state.website = action.newWebsite;
            state.dateOfBirth = action.newBirthDate;
            return (state);

        default:
            return (state);
    }
};

export default profile;