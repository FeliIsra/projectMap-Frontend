import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  width: '100%',
  margin: '0 auto',
  maxWidth: 900,
});

export const Content = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px 20px 0',
  gap: '50px',
});

export const TitleContainer = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  paddingBottom: 32,
  borderBottom: '1px solid black',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = styled('span')({
  fontSize: 30,
  fontWeight: 500,
});

export const ButtonContainer = styled('div')({});

export const ButtonContent = styled('span')({
  display: 'flex',
  fontSize: '14px',
  gap: 10,
  alignItems: 'center',

  svg: {
    fontSize: '16px',
  },
});
