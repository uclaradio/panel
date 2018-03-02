import * as React from 'react';
import glamorous, { Div } from 'glamorous';

const MainTitle = glamorous.h1({
  fontSize: '5vw',
  fontFamily: 'Josefin Sans',
});

const SubTitle = glamorous.p({
  fontSize: '1vw',
  fontFamily: 'Josefin Sans',
  color: '#958888',
});

const LoginHeader = () => (
  <Div className="login-header" lineHeight="1vw">
    <MainTitle>Panel</MainTitle>
    <SubTitle>Shh it's a secret.</SubTitle>
  </Div>
);

export default LoginHeader;
