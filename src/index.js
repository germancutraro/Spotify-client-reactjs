import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Main Reducer
import rootReducer from './reducers';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// History for react router
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
// redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react'

// history and middlewares
const history = createHistory();
const middlewares = [ routerMiddleware(history), thunk];

const persistConfig = {
  key: 'root',
  storage
};

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// store creation and persist
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading= { null } persistor={ persistor }>
        <App history={ history }/>
      </PersistGate>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
