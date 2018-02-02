import * as React from 'react';
import glamorous from 'glamorous';

const RadioInput = glamorous.input({
  backgroundColor: 'transparent',
});

const LoginForm = () => (
  <form>
    <label>
      Email:
      <RadioInput type="text" name="name" />
    </label>
    <label>
      Password:
      <RadioInput type="text" name="name" />
    </label>
    <button type="submit">Submit</button>
    <span>I forgot my password :(</span>
    <span>or, request an account</span>
  </form>
);

export default LoginForm;
