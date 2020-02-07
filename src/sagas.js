import { all, fork } from 'redux-saga/effects';

// sagas
import authSaga from './containers/Auth/authSaga';
import songsSaga from './containers/Songs/songsSaga';

export default function* root() {
  yield all([fork(authSaga), fork(songsSaga)]);
}
