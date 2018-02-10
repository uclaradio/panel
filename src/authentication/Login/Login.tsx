import * as React from 'react';
import { Div } from 'glamorous';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <Div
    className="container"
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="75vh"
  >
    <Div className="login">
      <LoginHeader />
      <LoginForm />
    </Div>
  </Div>
);

export default LoginPage;
