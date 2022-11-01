import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { onGetOne } from 'redux/actions/mckinsey.actions';
import {
  cuadrantesSelector,
  titleSelector,
} from 'redux/selectors/mckinsey.selector';

import LayoutContainer from 'containers/LayoutContainer';
import CustomizedTables from 'components/commons/Table';

import McKinseyView from 'views/McKinseyView';
import { SectionRadar, Title } from 'views/McKinseyView/styles';
import { Box, Grid } from '@mui/material';

import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { COLORS } from 'helpers/enums/colors';
import { Container } from 'views/FodaView/styles';
import RadarChartCustom from 'components/commons/RadarChart';

const McKinseyContainerResults = () => {
  const { matrizId, id } = useParams();
  const disptch = useDispatch();
  const navigate = useNavigate();
  const onClickGoBackButton = () =>
    navigate(`/projects/${id}/mckinsey/${matrizId}`);
  const cuadrantes = useSelector(cuadrantesSelector);
  const cuadrantesOrdenados = [
    cuadrantes[2],
    cuadrantes[1],
    cuadrantes[5],
    cuadrantes[0],
    cuadrantes[4],
    cuadrantes[8],
    cuadrantes[3],
    cuadrantes[7],
    cuadrantes[6],
  ];

  console.log({ cuadrantesOrdenados });

  const buildChartData = () => {
    const chartData = [];
    let total = 0;
    cuadrantesOrdenados?.map(
      (cuadrante) => (total += cuadrante.unidades.length)
    );
    cuadrantesOrdenados?.map((cuadrante) => {
      const data = {
        subject: cuadrante.name,
        A: cuadrante.unidades.length,
        fullMark: total,
      };

      chartData.push(data);
    });

    return chartData;
  };

  console.log(buildChartData());

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    disptch(onGetOne(matrizId));
  }, []);

  const { title } = useSelector(titleSelector);
  return (
    <LayoutContainer>
      <Container>
        <Grid container sx={{ height: '100%' }}>
          <Grid item sx={{ height: '100%' }}>
            <McKinseyView
              cuadrantes={cuadrantes}
              showResults
              openComments={(target) => setAnchorElement(target)}
              title={title}
              onClickGoBackButton={onClickGoBackButton}
            />
          </Grid>
          <Menu
            anchorEl={anchorElement}
            onClose={() => setAnchorElement(null)}
            open={!!anchorElement}
            PaperProps={{
              style: {
                width: 500,
              },
            }}
            sx={{
              '& .MuiMenu-list': {
                background: COLORS.AthensGray,
              },
            }}
          >
            <MenuItem key={1} disableRipple>
              <Comments show tool="MCKINSEY" toolId={matrizId} projectId={id} />
            </MenuItem>
          </Menu>
          <Grid item sx={{ height: '100%', marginTop: '40px' }}>
            <Grid container>
              <Grid item sx={{ padding: '30px' }}>
                <Title>Tabla de Resultados</Title>
                <CustomizedTables
                  items={cuadrantesOrdenados}
                  columns={[
                    {
                      label: 'Cuadrante',
                      value: 'title',
                    },
                    {
                      label: 'Que significa para la Unidad de Negocio?',
                      value: 'significado',
                    },
                    {
                      label: 'Cantidad de Unidades de Negocio',
                      value: (item) => item.unidades?.length,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ margin: '0 auto' }}>
            <SectionRadar sx={{ textAlign: 'center' }}>
              <Title>Grafico de Radar</Title>
              <RadarChartCustom data={buildChartData()} />
            </SectionRadar>
          </Box>
        </Grid>
      </Container>
    </LayoutContainer>
  );
};

export default McKinseyContainerResults;
