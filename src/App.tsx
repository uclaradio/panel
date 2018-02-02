import * as React from 'react';
// import { Route } from 'react-router-dom';

import Background from './Background/Background';
import LoginPage from './LoginPage/LoginPage';
// import SignupPage from './SignupPage/Signup';

class App extends React.Component {
  render() {
    return (
      <>
        <Background />
        <LoginPage />
      </>
    );
  }
}

export default App;
