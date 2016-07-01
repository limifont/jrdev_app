import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Lesson from './components/Lesson';
import Exercise from './components/Exercise';

export default (
  <Route>
    <Route path="/" component={App}>
    	<Route path="/lesson" component={Lesson} />
      <Route path="/exercises/:id" component={Exercise} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

