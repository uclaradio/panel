import * as React from 'react';

const LoginForm = () => (
  <form>
    <label>
      Email:
      <input type="text" name="name" />
    </label>
    <label>
      Password:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    <span>I forgot my password :(</span>
    <span>or, request an account</span>
  </form>
);

export default LoginForm;
