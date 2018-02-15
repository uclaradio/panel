import * as React from 'react';
import glamorous from 'glamorous';

const ProfileLabel = glamorous.label({
  fontFamily: 'sans-serif',
  fontSize: 15,
});

const ProfileFormInput = glamorous.input({
  backgroundColor: 'transparent',
  font: 'sans-serif',
  textAlign: 'center',
  fontSize: 20,
  height: 40,
  width: 300,
  border: '0.5px solid black',
  borderRadius: 5,
});

const SubmitButton = glamorous.button({
  backgroundColor: '#BD10E0',
  border: 'none',
  color: 'white',
  padding: '15 32',
  font: 'sans-serif',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 15,
  height: 40,
  width: 300,
  borderRadius: 5,
});

const ProfileForm = () => (
  <form name="profile_form">
    <ProfileLabel>
      Full Name
      <ProfileFormInput type="text" name="name" />
    </ProfileLabel>
    <ProfileLabel>
      DJ Name
      <ProfileFormInput type="text" name="djname" />
    </ProfileLabel>
    <ProfileLabel>
      Email Address
      <ProfileFormInput type="text" name="email" />
    </ProfileLabel>
    <ProfileLabel>
      Password
      <ProfileFormInput type="text" name="password" />
    </ProfileLabel>

    <SubmitButton>Update</SubmitButton>
  </form>
);

export default ProfileForm;
