import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

export const Container = styled('div')({
  width: '90%',
  margin: '0 auto',
  maxWidth: 1300,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const CardContent = styled('div')((props) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: props.backgroundcolor,
  borderRadius: 15,
  padding: '12px 20px',
}));

export const CardTitleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CardTitle = styled('span')({
  fontFamily: "'Fira Sans'",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
});

export const AddButton = styled(IconButton)({
  color: COLORS.white,
});
