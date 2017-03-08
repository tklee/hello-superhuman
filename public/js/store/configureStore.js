import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {runSagas} from '../sagas'
import {watchMainPageInitializePage} from '../containers/MainPageTemplate/redux/mainPageSaga'

const sagaMiddleware = createSagaMiddleware()

function configureStoreProd() {
  const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware) 
  );
  runSagas(sagaMiddleware)
  //sagaMiddleware.run(watchMainPageInitializePage)
  return store;
}

function configureStoreDev(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(sagaMiddleware)
    )
  );
  runSagas(sagaMiddleware)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

//const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
const configureStore = configureStoreProd;

export default configureStore;
