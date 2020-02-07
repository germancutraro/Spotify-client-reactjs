import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import authReducer from './containers/Auth/authReducer';
import songsReducer from './containers/Songs/songsReducer';

const authPersistConfig = {
  key: 'auth',
  storage
};

export default history =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    songs: songsReducer,
    router: connectRouter(history)
  });
