import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecureRoute from './SecureRoute';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact={true} component={Home}/>
          <SecureRoute path='/protected' component={Protected}/>
          <Route path='/login' component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
