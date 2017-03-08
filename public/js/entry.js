import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router'
import router from './routes';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    { router }
  </Provider>, document.getElementById('app')
);
