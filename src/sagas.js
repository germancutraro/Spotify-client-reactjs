import { all, fork } from 'redux-saga/effects';

// sagas
import songsSaga from './containers/Songs/songsSaga';

export default function* root() {
  yield all([fork(songsSaga)]);
}
