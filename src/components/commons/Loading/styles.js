import { styled } from '@mui/system';

import { COLORS } from 'helpers/enums/colors';

export const LoadingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoadingText = styled('span')({
  fontFamily: 'Fira sans',
  fontSize: '20px',
  color: COLORS.BlueDianne,
  marginTop: '20px',
});
