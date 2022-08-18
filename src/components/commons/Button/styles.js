import { styled } from '@mui/system';

export const CustomButton = styled('button', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'sx',
  name: 'CustomButton',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})({
  width: '100%',
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 16,
  borderRadius: 10,
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: '20px',
  fontWeight: '400',
});
