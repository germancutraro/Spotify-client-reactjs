import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './songsConstants';
import * as actions from './songsActions';
// import { push } from 'connected-react-router';

import { TrackHandler } from '../../utils/spotify';

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

export default function* songsSaga() {
  yield all([fork(getSongsSaga)]);
}
