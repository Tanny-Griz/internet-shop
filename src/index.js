// import './index.css'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {ConnectedRouter, routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import createRootReducer from './reducers'
import Layout from './containers/layout/index.jsx'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
