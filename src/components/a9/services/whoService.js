const WHO_API = 'http://localhost:4000/rest/who';

export const findAllWho = () =>
    fetch(WHO_API)
        .then(response => response.json());

export default {
    findAllWho
};