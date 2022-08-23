import React from 'react';
import { Grid } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { COLORS } from 'helpers/enums/colors';

import {
  Container,
  CardTitleContainer,
  CardContent,
  CardTitle,
  AddButton,
} from './styles';

const FodaView = (props) => {
  return (
    <Container>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px 0' }}
      >
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.YellowGrandis}>
            <CardTitleContainer>
              <CardTitle>Debilidades</CardTitle>
              <AddButton onClick={() => {}}>
                <AddCircleRoundedIcon />
              </AddButton>
            </CardTitleContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.GreenSulu}>
            <CardTitleContainer>
              <CardTitle>Oportunidades</CardTitle>
              <AddButton onClick={() => {}}>
                <AddCircleRoundedIcon />
              </AddButton>
            </CardTitleContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.RedBurntSienna}>
            <CardTitleContainer>
              <CardTitle>Amenazas</CardTitle>
              <AddButton onClick={() => {}}>
                <AddCircleRoundedIcon />
              </AddButton>
            </CardTitleContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.GreenEmerald}>
            <CardTitleContainer>
              <CardTitle>Fortalezas</CardTitle>
              <AddButton onClick={() => {}}>
                <AddCircleRoundedIcon />
              </AddButton>
            </CardTitleContainer>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FodaView;
