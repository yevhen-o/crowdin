import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import appReducer from './appReducer';

export const history = createBrowserHistory();

const appReducers = combineReducers({
  app: appReducer,
  router: connectRouter(history),
});


const rootReducer = (state, action) => {
  return appReducers(state, action);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk)),

);

ReactDOM.render(<Provider store={store} appId={222}>
  <App store={store} />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
