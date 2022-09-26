import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import { Form } from 'formik';

import { COLORS } from 'helpers/enums/colors';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: 1300,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '90%',
});

export const CustomForm = styled(Form)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
