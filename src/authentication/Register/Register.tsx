import * as React from 'react';
import { Div } from 'glamorous';

import AuthHeader from '../AuthHeader';
import RegisterForm from './RegisterForm';

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
    <Div className="register">
      <AuthHeader />
      <RegisterForm />
    </Div>
  </Div>
);

export default LoginPage;
