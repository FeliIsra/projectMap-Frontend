import { styled } from '@mui/system';

export const InputContainer = styled('div')({
  display: 'flex',
  width: '100%',
  position: 'relative',
});

export const CustomInput = styled('input')((props) => ({
  flex: 1,
  border: 'none',
  padding: 20,
  paddingRight: props.showIcon ? '3rem' : 20,
  backgroundColor: 'white',
  borderRadius: 10,
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: 18,
  fontWeight: '400',
  ':focus': {
    outline: 'none',
  },
  '::placeholder': {
    color: 'grey',
  },
}));

export const IconContainer = styled('div')({
  display: 'flex',
  height: '1.5rem',
  width: '1.5rem',
  padding: 4,
  position: 'absolute',
  boxSizing: 'border-box',
  top: '50%',
  right: 10,
  transform: 'translateY(-50%)',

  button: {
    height: '1rem',
    width: '1rem',
  },
});
