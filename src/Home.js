import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withAuth } from './auth';

export default withAuth(withRouter(props => {
  // Change the button that's displayed, based on our authentication status
  const button = props.auth.isAuthenticated() ?
    <button onClick={props.auth.logout.bind(null, props.history)}>Logout</button> :
    <button onClick={props.auth.login.bind(null, props.history)}>Login</button>;

  return (
    <div>
      <Link to='/'>Home</Link><br/>
      <Link to='/protected'>Protected</Link><br/>
      {button}
    </div>
  );
}));
