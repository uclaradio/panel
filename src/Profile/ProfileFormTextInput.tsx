import glamorous from 'glamorous';

const ProfileFormTextInput = glamorous.input({
  backgroundColor: 'transparent',
  font: 'sans-serif',
  textAlign: 'left',
  fontSize: '20px',
  height: '2.5rem',
  width: '20rem',
  border: '0.2px solid black',
  borderRadius: '0.25rem',
  display: 'block',
  marginBottom: '0.5rem',
  transition: 'all .3s',
  textIndent: '5px',

  ':focus': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    outline: 'none',
    boxShadow: 'rgba(245, 245, 245, 1)',
  },
});

export default ProfileFormTextInput;
