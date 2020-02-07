import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './authConstants';
import * as actions from './authActions';
import * as services from './authServices';

import client from '../../utils/spotify';

// LOGIN
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

// Get user
function* getUser() {
  try {
    const user = yield services.getUser();
    console.log('s', user);
    if (user) yield put(actions.getUserSuccess({ user }));
  } catch (err) {
    yield put(actions.getUserFailure({ error: err.message }));
  }
}

function* getUserSaga() {
  yield takeLatest(constants.GET_USER_START, getUser);
}

export default function* authSaga() {
  yield all([fork(getUserSaga), fork(signInSaga)]);
}
