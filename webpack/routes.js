import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Splash from './components/Splash';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';
import Exercise from './components/Exercise'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup'; 
import CreateClass from './components/CreateClass';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';

const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.auth,
	predicate: auth => auth.isAuthenticated,
	redirectAction: () => handleLogout(browserHistory),
	wrapperDisplayName: 'UserIsAuthenticated'
})

const UserIsEducator = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.userType === 'Educator',
  redirectAction: () => browserHistory.push('/'),
  wrapperDisplayName: 'UserIsEducator'
})

const UserIsMentor = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.userType === 'Mentor',
  redirectAction: () => browserHistory.push('/'),
  wrapperDisplayName: 'UserIsMentor'
})

const UserIsJrdev = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.userType === 'Jrdev',
  redirectAction: () => browserHistory.push('/'),
  wrapperDisplayName: 'UserIsJrdev'
})

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={UserIsAuthenticated(Dashboard)} />
    	<Route path="/lesson" component={UserIsAuthenticated(Lesson)} />
      <Route path="/lesson/:lesson_id/exercise/:exercise_id" component={UserIsAuthenticated(Exercise)} />
      <Route path='/login' component={Login} />
      <Route path='/signup/:type' component={Signup} />
      <Route path='/splash' component={Splash} />
      <Route path='/create_class' component={UserIsEducator(CreateClass)} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

