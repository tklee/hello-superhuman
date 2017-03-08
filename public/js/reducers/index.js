import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import mainPageReducer from '../containers/MainPageTemplate/redux/mainPageReducer';

const rootReducer = combineReducers({
  mainPageReducer,
  routing: routerReducer
});

export default rootReducer;
