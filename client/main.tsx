/// <reference path='../typings/main.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IStore, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {};

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store: IStore<any> = enhancer(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
