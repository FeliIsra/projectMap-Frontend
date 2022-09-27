import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const CustomInput = styled(TextField)({
  flex: 1,
  width: '100%',
  border: 'none',
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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      fontFamily: 'Fira Sans, sans-serif',
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
});
