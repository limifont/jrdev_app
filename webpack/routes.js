import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup'; 
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';

const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.auth,
	predicate: auth => auth.isAuthenticated,
	redirectAction: () => handleLogout(browserHistory),
	wrapperDisplayName: 'UserIsAuthenticated'
})

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={UserIsAuthenticated(Dashboard)} />
    	<Route path="/lesson" component={UserIsAuthenticated(Lesson)} />
      <Route path='/login' component={Login} />
      <Route path='/signup/:type' component={Signup} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

