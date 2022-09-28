import React, { useEffect, useState } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useParams } from 'react-router';
import OKRView from 'views/OKRView';
import { Grid } from '@mui/material';

const OKRContainer = () => {
  const { okrId, id } = useParams();

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%', width: '100%' }}>
          <OKRView />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default OKRContainer;
