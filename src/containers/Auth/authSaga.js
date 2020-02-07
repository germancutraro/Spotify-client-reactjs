import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './authConstants';
import * as actions from './authActions';
import * as services from './authServices';

import client from '../../utils/spotify';

// LOGIN
function* signIn() {
  if (!localStorage.getItem('token'))
    yield client.login().then(url => {
      window.location.href = url;
      localStorage.token = window.location.hash.split('&')[0].split('=')[1];
      client.token = localStorage.token;
    });
  else client.token = localStorage.getItem('token');
}

function* signInSaga() {
  yield takeLatest(constants.SIGN_IN, signIn);
}

// Get user
function* getUser() {
  try {
    const user = yield services.getUser();
    console.log(user);
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
