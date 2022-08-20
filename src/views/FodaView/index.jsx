import { Grid } from '@mui/material';
import React from 'react';

import { Container, CardContent } from './styles';

const FodaView = (props) => {
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2} height={'100%'}>
        <Grid item md={6} display={'flex'}>
          <CardContent backgroundcolor="#FFD97D80"></CardContent>
        </Grid>
        <Grid item md={6} display={'flex'}>
          <CardContent backgroundcolor="#AAF68380" />
        </Grid>
        <Grid item md={6} display={'flex'}>
          <CardContent backgroundcolor="#EE605580" />
        </Grid>
        <Grid item md={6} display={'flex'}>
          <CardContent backgroundcolor="#60D39480" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FodaView;
