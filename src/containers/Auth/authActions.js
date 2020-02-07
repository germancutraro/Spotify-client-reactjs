import * as constants from './authConstants';

export const getUserStart = payload => ({
  type: constants.GET_USER_START,
  payload
});

export const getUserSuccess = payload => ({
  type: constants.GET_USER_SUCCESS,
  payload
});

export const getUserFailure = payload => ({
  type: constants.GET_USER_FAILURE,
  payload
});

export const signIn = payload => ({
  type: constants.SIGN_IN,
  payload
});
