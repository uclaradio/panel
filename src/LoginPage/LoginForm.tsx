import * as React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to="/request-account">or, request an account</Link>
  </form>
);

export default LoginForm;
