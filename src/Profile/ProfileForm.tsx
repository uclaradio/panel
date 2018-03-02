import * as React from 'react';
import { Form } from 'glamorous';

import ProfileLabel from './ProfileLabel';
import ProfileSubmitButton from './ProfileSubmitButton';
import ProfileFormTextInput from './ProfileFormTextInput';
import ProfilePicture from './ProfilePicture';

const ProfileForm = () => (
  <Form
    backgroundColor="rgba(255, 255, 255, 0.6)"
    padding="20px 50px"
    display="block"
  >
    <ProfilePicture />
    <ProfileLabel>
      Full Name
      <ProfileFormTextInput type="text" name="name" />
    </ProfileLabel>
    <ProfileLabel>
      DJ Name
      <ProfileFormTextInput type="text" name="djname" />
    </ProfileLabel>
    <ProfileLabel>
      Email Address
      <ProfileFormTextInput type="text" name="email" />
    </ProfileLabel>
    <ProfileLabel>
      Password
      <ProfileFormTextInput type="text" name="password" />
    </ProfileLabel>

    <ProfileSubmitButton>Update</ProfileSubmitButton>
  </Form>
);

export default ProfileForm;
