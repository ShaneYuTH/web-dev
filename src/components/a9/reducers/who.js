import whoJson from './data/who.json';

const who = (state = whoJson) => {
  return state;
}

export default who;

// const WHO_API = 'http://localhost:4000/rest/who';
//
// let initialState = {};
// fetch(WHO_API)
//     .then(response => response.json())
//     .then(who => initialState = who);