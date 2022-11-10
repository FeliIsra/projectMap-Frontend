import { styled } from '@mui/system';
import { CircularProgress } from '@mui/material';
import { circularProgressClasses } from '@mui/material/CircularProgress';

import { COLORS } from 'helpers/enums/colors';

export const Container = styled('div')({
  display: 'flex',
  width: '100%',
  margin: '50px 20px 10px',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '50px',
});

export const Content = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '50%',
  height: '95%',
  maxWidth: '95%',
  aspectRatio: '1',
});

export const StepContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  flex: 1,
});

export const Step = styled('div')({
  display: 'flex',
  position: 'relative',
  aspectRatio: '1',
});

export const ItemContainer = styled('div')({
  height: 160,
  position: 'absolute',
  aspectRatio: '1',
  borderRadius: '50%',
  backgroundColor: COLORS.GhostGray,
  display: 'flex',
});

export const Item = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
});

export const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  svg: {
    fontSize: 14,
  },
  button: {
    backgroundColor: COLORS.white,
    marginBottom: 8,
  },
});

export const StepTitle = styled('span')({
  fontFamily: 'Fira Sans',
  fontWeight: 600,
  fontSize: 16,
  textAlign: 'center',
  padding: '0 20px',
});

export const MenuItemText = styled('div')({
  fontSize: 14,
  color: COLORS.BlueDianne,
});

export const CustomCircularProgress = styled(CircularProgress)({
  position: 'absolute',

  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: 'round',
  },
});

export const TitleButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  padding: '20px',
  position: 'absolute',
  alignItems: 'center',
  width: '90%',
  marginBottom: '50px',
});

export const ButtonContainer = styled('div')({});

export const Title = styled('span')({
  fontFamily: 'Fira Sans',
  fontWeight: 500,
  fontSize: 36,
  marginLeft: '25%',
});
