import { styled } from '@mui/material';
import { CardContent as MUICardContent, Card as MUICard } from '@mui/material';

export const Card = styled(MUICard)({
  display: 'flex',
  borderRadius: 15,
});

export const CardContent = styled(MUICardContent)((props) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: props.backgroundColor,
  borderRadius: 15,
  gap: 25,
}));

export const TitleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = styled('span')({
  fontFamily: 'Fira Sans',
  fontWeight: 500,
  fontSize: 24,
});

export const Description = styled('span')({
  fontSize: 14,
});
