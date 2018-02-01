import * as React from 'react';

import Background from './Background/Background';
import LoginPage from './LoginPage/LoginPage';

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
