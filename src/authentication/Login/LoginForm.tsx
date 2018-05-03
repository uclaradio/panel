import * as React from 'react';
import glamorous, { Div } from 'glamorous';

const RadioInput = glamorous.input({
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderWidth: '1.2px',
  borderRadius: 5,
  width: '25vw',
  height: '1.4vw',
  marginBottom: '1vw',
});

const InputLabel = glamorous.label({
  textAlign: 'left',
});

const LoginButton = glamorous.button({
  backgroundColor: '#cc00cc',
  color: 'white',
  border: '1px',
  padding: '7px 15px',
  borderRadius: 7,
  float: 'left',
});

const AccountLink = glamorous.a({
  color: '#958888',
  fontSize: '1vw',
  fontFamily: 'Josefin Sans',
});

const LoginForm = () => (
  <form>
    <Div
      fontFamily="Josefin Sans"
      fontSize="1.1vw"
      color="#5A5A5A"
    >
      <InputLabel>
        <div> Email Address </div>
        <RadioInput type="text" name="name" />
      </InputLabel>
      <InputLabel>
        <div> Password </div>
        <RadioInput type="password" name="name" />
      </InputLabel>
    </Div>
    <LoginButton type="submit">Login</LoginButton>
    <Div
      float="right"
      paddingTop=".50vw"
    >
      <AccountLink>I forgot my password :(</AccountLink>
    </Div>
    <Div
      paddingTop="3vw"
    >
      <AccountLink>or, request an account</AccountLink>
    </Div>
  </form>
);

export default LoginForm;
