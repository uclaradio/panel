import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Background from './Background/Background';
import Login from './authentication/Login/Login';
import Register from './authentication/Register/Register';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Shows from './Shows/Shows';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Background />
          <Switch>
            {/* Public Routes */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* Private Routes */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/profile" exact={true} component={Profile} />
            <Route path="/shows" exact={true} component={Shows} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
