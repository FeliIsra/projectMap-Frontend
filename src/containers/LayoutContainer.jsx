import { styled } from '@mui/system';
import React from 'react';

const Container = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100vh',
});

export const LayoutContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default LayoutContainer;
