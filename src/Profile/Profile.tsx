import * as React from 'react';
import { Div } from 'glamorous';

import ProfileForm from './ProfileForm';

const Profile = () => (
  <Div
    className="profile-form"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Div className="profile">
      <ProfileForm />
    </Div>
  </Div>
);

export default Profile;
