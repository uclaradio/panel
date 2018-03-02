import glamorous from 'glamorous';

const ProfileFormTextInput = glamorous.input({
  backgroundColor: 'transparent',
  font: 'sans-serif',
  textAlign: 'left',
  fontSize: 20,
  height: 40,
  width: 300,
  border: '0.2px solid black',
  borderRadius: 5,
  display: 'block',
  marginBottom: '10%',
  transition: 'all .3s',
  textIndent: '5px',

  ':focus': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    outline: 'none',
    boxShadow: 'rgba(245, 245, 245, 1)',
  },
});

export default ProfileFormTextInput;
