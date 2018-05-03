import * as React from 'react';
import { Div } from 'glamorous';
import { InputLabel, RadioInput, RegisterButton, AccountLink } from '../styles';

const RegisterForm = () => (
  <form>
    <Div
      fontFamily="Josefin Sans"
      fontSize="1.1vw"
      color="#5A5A5A"
    >
      <InputLabel>
        <div> Full Name </div>
        <RadioInput type="text" name="name" />
      </InputLabel>
      <InputLabel>
        <div> Phone Number </div>
        <RadioInput type="text" name="name" />
      </InputLabel>
      <InputLabel>
        <div> Email Address </div>
        <RadioInput type="text" name="name" />
      </InputLabel>
      <InputLabel>
        <div> Password </div>
        <RadioInput type="password" name="name" />
      </InputLabel>
    </Div>
    <RegisterButton type="submit">Register</RegisterButton>
    <Div
      paddingTop="3vw"
    >
      <AccountLink>Or, sign in</AccountLink>
    </Div>
  </form>
);

export default RegisterForm;
