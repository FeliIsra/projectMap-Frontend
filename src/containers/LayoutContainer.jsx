import { styled } from '@mui/system';
import React from 'react';

import HeaderContainer from 'containers/HeaderContainer';

const Container = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100vh',
});

const ViewContainer = styled('div')(({ hasHeader }) => ({
  display: 'flex',
  width: '100%',
  height: hasHeader ? 'calc(100vh - 64px)' : '100%',
  margin: hasHeader ? '64px auto 0' : '0 auto',
}));

export const LayoutContainer = ({ children, hasHeader = true }) => {
  return (
    <Container>
      {hasHeader && <HeaderContainer />}
      <ViewContainer hasHeader={hasHeader}>{children}</ViewContainer>
    </Container>
  );
};

export default LayoutContainer;
