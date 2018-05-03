import * as React from 'react';
import { Div } from 'glamorous';
import { MainTitle, SubTitle } from './styles';

const AuthHeader = () => (
  <Div className="auth-header" lineHeight="1vw">
    <MainTitle>Panel</MainTitle>
    <SubTitle>Shh it's a secret.</SubTitle>
  </Div>
);

export default AuthHeader;
