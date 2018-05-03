import glamorous from 'glamorous';

export const MainTitle = glamorous.h1({
  fontSize: '5vw',
  fontFamily: 'Josefin Sans',
});

export const SubTitle = glamorous.p({
  fontSize: '1vw',
  fontFamily: 'Josefin Sans',
  color: '#958888',
});

export const RadioInput = glamorous.input({
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderWidth: '1.2px',
  borderRadius: 5,
  width: '25vw',
  height: '1.4vw',
  marginBottom: '1vw',
});

export const InputLabel = glamorous.label({
  textAlign: 'left',
});

export const RegisterButton = glamorous.button({
  backgroundColor: '#cc00cc',
  color: 'white',
  border: '1px',
  padding: '7px 15px',
  borderRadius: 7,
});

export const AccountLink = glamorous.a({
  color: '#958888',
  fontSize: '1vw',
  fontFamily: 'Josefin Sans',
});