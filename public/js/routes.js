import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainPage from './containers/MainPageTemplate/components/MainPage.component';

let router = (
  <Router history={browserHistory}> 
    <Route path="/" component={MainPage} />
  </Router>
)

export default router
