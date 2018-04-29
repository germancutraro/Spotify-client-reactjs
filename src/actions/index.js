import axios from 'axios';
import { TrackHandler, Client } from 'spotify-sdk';

const client = Client.instance;

client.settings = {
  clientId: '9e729f9d6b0941dc9c2a707fdb4a9479',
  secretId: 'b387b915845e44e98d493fd6bdf372f1',
  scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
  redirect_uri: 'http://localhost:3000'
};

const isSignIn = () => {
  return dispatch => {

    if (sessionStorage.token) {
      client.token = sessionStorage.token;
    } else if (window.location.hash.split('&')[0].split('=')[1]) {
      sessionStorage.token = window.location.hash.split('&')[0].split('=')[1];
      client.token = sessionStorage.token;
    } else {
      client.login()
        .then(url => window.location.href = url)
    }

  };
};


const startFetch = () => {
  return {
    type: 'IS_FETCHING',
    isFetching: true
  };
};

const errorFetch = err => {
  return {
    type: 'ERROR_FETCH',
    isFetching: false,
    err
  };
};

const completeFetch = data => {
  return {
    type: 'COMPLETE_FETCH',
    isFetching: false,
    payload: data
  };
};

const searchSong = songName => {
  return dispatch => {
    dispatch(startFetch());
    let track = new TrackHandler();
    track.search(songName, { limit: 30 })
      .then(songs => {
        console.log(songs)
        dispatch(completeFetch(songs))
      })
      .catch(err => dispatch(errorFetch(err)))
  };
};

export { isSignIn, searchSong }