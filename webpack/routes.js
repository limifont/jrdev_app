import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Lesson from './components/Lesson';

export default (
  <Route>
    <Route path="/" component={App}>
    	<Route path="/lesson" component={Lesson} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

