import { styled } from '@mui/system';

export const InputContainer = styled('div')({
  display: 'flex',
  width: '100%',
  position: 'relative',
});

export const CustomInput = styled('textarea')((props) => ({
  flex: 1,
  border: 'none',
  padding: 20,
  paddingRight: props.showIcon ? '3rem' : 20,
  backgroundColor: 'white',
  borderRadius: 10,
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: '20px',
  fontWeight: '400',
  ':focus': {
    outline: 'none',
  },
  '::placeholder': {
    color: 'grey',
  },
}));
