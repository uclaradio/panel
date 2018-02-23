import * as React from 'react';
import glamorous, { Div } from 'glamorous';

const RadioInput = glamorous.input({
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderWidth: '1px',
  borderRadius: 5,
  width: '25vw',
  margin: 'auto',
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
  fontSize: '.9vw',
});

const LoginForm = () => (
  <form>
    <br/>
    <InputLabel>
      <div> Email Address </div>
      <RadioInput type="text" name="name" />
    </InputLabel>
    <br/>
    <br/>
    <InputLabel>
      <div> Password </div>
      <RadioInput type="text" name="name" />
    </InputLabel>
    <br/>
    <br/>
    <LoginButton type="submit">Login</LoginButton>
    <Div
      float="right"
    >
    <AccountLink>I forgot my password :(</AccountLink>
    </Div>
    <br/>
    <br/>
    <AccountLink>or, request an account</AccountLink>
  </form>
);

export default LoginForm;
