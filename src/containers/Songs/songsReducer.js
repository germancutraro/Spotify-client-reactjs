import * as constants from './songsConstants';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_SONGS_START:
      return { ...state };

    case constants.GET_SONGS_SUCCESS:
      return { ...state, list: payload.list, loading: false, error: null };

    case constants.GET_SONGS_FAILURE:
      return { ...state, list: [], loading: false, error: payload.error };

    default:
      return state;
  }
};
