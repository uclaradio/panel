import * as React from 'react';
import { Img } from 'glamorous';

const shrek = require('./classy-shrek.png');

const ProfilePicture = () => (
  <Img src={shrek} height="260" width="260" borderRadius="50%" />
);

export default ProfilePicture;
