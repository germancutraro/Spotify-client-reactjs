import { combineReducers } from 'redux';

import songs from './songsReducer';

const rootReducer = combineReducers({
  songs
});

export default rootReducer;