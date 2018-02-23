import * as React from 'react';
import glamorous from 'glamorous';

const MainTitle = glamorous.h1({
  fontSize: '70px',
});

const LoginHeader = () => (
  <div className="login-header">
    <MainTitle>Panel</MainTitle>
    <div> <span className="subtext">Shh it's a secret.</span> </div>
  </div>
);

export default LoginHeader;
