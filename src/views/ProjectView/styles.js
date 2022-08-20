import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  width: '100%',
  margin: '0 auto',
  maxWidth: 900,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Content = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'grey',
  borderRadius: '50%',
  height: '95%',
  maxWidth: '95%',
});

export const TitleContainer = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  paddingBottom: 32,
  borderBottom: '1px solid black',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 55,
});

export const Title = styled('span')({
  fontSize: 25,
  fontWeight: 800,
});
