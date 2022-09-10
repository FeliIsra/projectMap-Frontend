import { styled } from '@mui/material';

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

export const CreateContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const CreateModalTitle = styled('span')({
  fontFamily: "'Fira Sans'",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  color: COLORS.BlueDianne,
});

export const CreateButtonsContainer = styled('div')({
  display: 'flex',
  width: '100%',
  gap: 15,
  justifyContent: 'space-between',
});
