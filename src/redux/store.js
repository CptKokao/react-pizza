// import { createStore } from 'redux';
import rootReducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const store = createStore(
//   rootReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.store = store;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;