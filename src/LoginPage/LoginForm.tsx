import * as React from 'react';
import glamorous from 'glamorous';

const RadioInput = glamorous.input({
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderWidth: '0.5px',
  borderRadius: 5,
});

const LoginButton = glamorous.button({
  backgroundColor: '#cc00cc',
  color: 'white',
  border: '0px',
  padding: '7px 15px',
  borderRadius: 10,
});

const LoginForm = () => (
  <form>
    <label>
      Email: 
      <RadioInput type="text" name="name" />
    </label>
    <br/>
    <br/>
    <label>
      Password: 
      <RadioInput type="text" name="name" />
    </label>
    <br/>
    <LoginButton type="submit">Login</LoginButton>
    <span>I forgot my password :(</span>
    <br/>
    <span>or, request an account</span>
  </form>
);

export default LoginForm;
