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
  color: COLORS.BlueDianne,
});

export const AddButton = styled(IconButton)({
  color: COLORS.white,
});

export const ButtonsContainer = styled('div')({
  display: 'flex',
  width: '100%',
  gap: 15,
  justifyContent: 'space-between',
});

export const CreateContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const FactoresContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 5,
});

export const FactorContent = styled('div')({
  display: 'flex',
  background: 'rgba(217, 217, 217, 0.7)',
  borderRadius: 15,
  padding: 10,
});

export const FactorDescription = styled('span')({
  fontFamily: "'Fira Sans'",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '14px',
  display: 'flex',
  alignItems: 'center',
});
