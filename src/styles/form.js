import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import { COLORS } from 'helpers/enums/colors';

import Button from 'components/commons/Button';
import { Form } from 'formik';

export const Container = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    'linear-gradient(180deg, #2A9D8F 0%, rgba(151, 255, 242, 0) 100%)',
});

export const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  width: '100%',
  maxWidth: '400px',
});

export const CustomForm = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  alignItems: 'center',
});

export const Title = styled('span')({
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: '50px',
  fontWeight: '700',
  color: COLORS.BlueDianne,
});

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const LinkContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 25,
});

export const CustomLink = styled(Link)({
  textDecoration: 'none',
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: '18px',
  color: COLORS.BlueDianne,
});
