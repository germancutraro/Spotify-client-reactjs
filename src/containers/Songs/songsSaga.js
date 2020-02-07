import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './songsConstants';
import * as actions from './songsActions';
// import { push } from 'connected-react-router';

import { TrackHandler, Client } from 'spotify-sdk';

const client = Client.instance;

client.settings = {
  clientId: '9e729f9d6b0941dc9c2a707fdb4a9479',
  secretId: 'b387b915845e44e98d493fd6bdf372f1',
  scopes: [
    'user-follow-modify user-follow-read user-library-read user-top-read'
  ],
  redirect_uri: 'http://localhost:3000'
};

// GET BOOKS
function* getSongs({ payload: { songName } }) {
  try {
    const track = yield new TrackHandler();
    const songs = yield track.search(songName, { limit: 10 });
    console.log('hola: ', songs);
    if (songs) yield put(actions.getSongsSuccess({ list: songs }));
  } catch (err) {
    yield put(actions.getSongsFailure({ error: err.message }));
  }
}

function* getSongsSaga() {
  yield takeLatest(constants.GET_SONGS_START, getSongs);
}

function* signIn() {
  if (sessionStorage.token) {
    yield (client.token = sessionStorage.token);
  } else if (window.location.hash.split('&')[0].split('=')[1]) {
    yield (sessionStorage.token = window.location.hash
      .split('&')[0]
      .split('=')[1]);
    yield (client.token = sessionStorage.token);
  } else {
    yield client.login().then(url => (window.location.href = url));
  }
}

function* signInSaga() {
  yield takeLatest(constants.SIGN_IN, signIn);
}

export default function* songsSaga() {
  yield all([fork(getSongsSaga), fork(signInSaga)]);
}
