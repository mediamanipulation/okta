import React from 'react';
import { Route, Redirect } from 'react-router';
import { withAuth } from './auth';

export default withAuth(({ auth, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
));
