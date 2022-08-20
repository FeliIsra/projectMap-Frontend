import { styled } from '@mui/system';

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
  backgroundColor: props.backgroundcolor,
  borderRadius: 15,
}));
