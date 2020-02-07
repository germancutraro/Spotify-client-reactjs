import * as constants from './songsConstants';

export const getSongsStart = payload => ({
  type: constants.GET_SONGS_START,
  payload
});

export const getSongsSuccess = payload => ({
  type: constants.GET_SONGS_SUCCESS,
  payload
});

export const getSongsFailure = payload => ({
  type: constants.GET_SONGS_FAILURE,
  payload
});

export const signIn = () => ({
  type: constants.SIGN_IN
});
