import * as React from 'react';
import { Div } from 'glamorous';

import AuthHeader from '../AuthHeader';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <Div
    className="container"
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="75vh"
    font-family="Arial"
    text-align="center"
  >
    <Div className="login">
      <AuthHeader />
      <LoginForm />
    </Div>
  </Div>
);

export default LoginPage;
