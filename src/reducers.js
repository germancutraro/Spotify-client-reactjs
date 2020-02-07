import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// reducers
import songsReducer from './containers/Songs/songsReducer';

export default history =>
  combineReducers({
    songs: songsReducer,
    router: connectRouter(history)
  });
