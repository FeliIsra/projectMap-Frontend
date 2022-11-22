import React from 'react';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { Doughnut, Radar, Bar, Line, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

import { getRandomInt } from 'helpers/randomNumber';
import { ButtonContainer, Title, TitleContainer } from 'views/FodaView/styles';
import { ArrowBack } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS } from 'helpers/enums/colors';
import ToolTip from 'components/commons/ToolTip';
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
}));

const labels = [
  'Desarrollo Mer.',
  'Penetración',
  'Diversificación',
  'Desarollo Prod.',
];

const labelsMonths = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const dataLine = {
  labels: labelsMonths,
  datasets: [
    {
      label: 'Dataset 1',
      data: labelsMonths.map(() => getRandomInt(1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: labelsMonths.map(() => getRandomInt(1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235)',
    },
  ],
};

export const dataHorizontalBar = {
  labels: ['Objetivo 1', 'Objectivo 2', 'Objetivo 3', 'Objetivo 4'],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomInt(1000)),
      backgroundColor: 'rgba(75, 192, 192, 1)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRandomInt(1000)),
      backgroundColor: 'rgba(54, 162, 235, 1)',
    },
  ],
};

export const dataPie = {
  labels: [
    'Politicos',
    'Economicos',
    'Sociales',
    'Tecnologicos',
    'Ambientales',
    'Legales',
  ],
  datasets: [
    {
      label: 'PESTEL 2022',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
      borderWidth: 1,
    },
  ],
};

export const ansoffData = {
  labels,
  datasets: [
    {
      label: 'ANSOFF 2021',
      data: labels.map(() => getRandomInt(1000)),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'ANSOFF 2022',
      data: labels.map(() => getRandomInt(1000)),
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

export const ansoffOptions = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  indexAxis: 'y',
};

const MejoraContinuaView = ({
  projectId,
  dataFODA,
  dataPESTEL,
  dataMckinsey,
  dataPorter,
  dataAnsoff,
  dataOkrs,
  dataBalanced,
  onClickButtonGoBack,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <TitleContainer sx={{ justifyContent: 'unset' }}>
        <ButtonContainer sx={{ marginLeft: '1.5%' }}>
          <IconButton size="small" onClick={onClickButtonGoBack}>
            <ArrowBack />
          </IconButton>
        </ButtonContainer>
        <Title sx={{ marginLeft: '40%', fontSize: 34 }}>Mejora continua</Title>
      </TitleContainer>
      <Box
        sx={{
          padding: '30px 0',
          display: 'flex',
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4} sx={{ display: 'flex', flex: 1 }}>
            <Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
              <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '100%' }}>
                  <Link
                    to={
                      dataFODA.id
                        ? `/projects/${projectId}/foda/${dataFODA.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        Comparativa FODA
                      </Typography>
                      <ToolTip
                        text="En este gráfico usted puede observar la comparación de puntajes de importancia de los últimos dos FODAs de su empresa. Utilice estas métricas para analizar la evolución de la misma y recuerde entrar a los FODAs para verificar los consejos y los factores específicos guardados. "
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <Radar
                    data={dataFODA}
                    options={{
                      scales: {
                        r: {
                          ticks: {
                            stepSize: 50,
                          },
                        },
                      },
                    }}
                  />
                </Box>
              </Item>
              <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '100%' }}>
                  <Link
                    to={
                      dataPorter.id
                        ? `/projects/${projectId}/porter/${dataPorter.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        Comparativa PORTER
                      </Typography>
                      <ToolTip
                        text="En esta gráfica usted puede observar la comparación de puntajes en las distintas áreas delineadas por Porter de sus últimas 2 herramientas cargadas. Estas métricas evolutivas son muy útiles para analizar dónde usted está disponiendo de sus recursos, y a dónde debería hacerlo. "
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <Bar data={dataPorter} />
                </Box>
              </Item>
              <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                  <Link
                    to={
                      dataMckinsey.id
                        ? `/projects/${projectId}/mckinsey/${dataMckinsey.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        MCKINSEY
                      </Typography>
                      <ToolTip
                        text="Gráfico comparativo entre los distintos productos cargados en su análisis Mckinsey. Recuerde que a puntaje mayor, mejor es la posición de su producto. Recuerde que dependiendo de su estado actual, usted deberá decidir qué tanto riesgo quiere tomar con productos no óptimos."
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <PolarArea
                    data={dataMckinsey}
                    options={{
                      plugins: {
                        legend: {
                          position: 'right',
                        },
                      },
                    }}
                  />
                </Box>
              </Item>
            </Stack>
          </Grid>
          <Grid item md={5} sx={{ display: 'flex', flex: 1 }}>
            <Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
              <Item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                  <Link
                    to={
                      dataBalanced.id
                        ? `/projects/${projectId}/balanceScorecard/${dataBalanced.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        Balanced Scoredcard
                      </Typography>
                      <ToolTip
                        text="En este gráfico usted puede ver el avance absoluto de sus objetivos cargados en el balanced scorecard para compararlos a simple vista. Recuerde que usted puede en cualquier momento priorizar un objetivo distinto de ser necesario."
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <Line data={dataBalanced} />
                </Box>
              </Item>
              <Item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  <Link
                    to={
                      dataOkrs.id
                        ? `/projects/${projectId}/okr/${dataOkrs.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        OKR
                      </Typography>
                      <ToolTip
                        text="En este gráfico usted puede observar un gráfico comparativo entre los objetivos y el progreso de sus OKRs. Recuerde analizar estos números acorde del mes en el que está, y recuerde que puede priorizar un OKR distinto de ser necesario."
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <Bar
                    options={{
                      indexAxis: 'y',
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      },
                    }}
                    data={dataOkrs}
                  />
                </Box>
              </Item>
            </Stack>
          </Grid>
          <Grid item md={3} sx={{ display: 'flex', flex: 1 }}>
            <Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
              <Item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                  <Link
                    to={
                      dataPESTEL.id
                        ? `/projects/${projectId}/pestel/${dataPESTEL.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        PESTEL
                      </Typography>
                      <ToolTip
                        text="En este gráfico usted puede observar la distribución de puntajes de importancia en el ultimo analisis Pestel de su empresa. Utilice estas métricas para analizar cuáles son los puntos importantes que su empresa debe analizar, y recuerde entrar a la herramienta para revisar los consejos y factores específicos."
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <Doughnut
                    data={dataPESTEL}
                    style={{ display: 'flex', width: '100%' }}
                    options={{
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      },
                    }}
                  />
                </Box>
              </Item>
              <Item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                  <Link
                    to={
                      dataAnsoff.id
                        ? `/projects/${projectId}/ansoff/${dataAnsoff.id}`
                        : ''
                    }
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'Fira Sans',
                          fontSize: '1.3rem',
                        }}
                      >
                        ANSOFF
                      </Typography>
                      <ToolTip
                        text="En este gráfico comparativo usted puede analizar la distribución de productos categorizados mediante los últimos 2 análisis Ansoff. Utilice este gráfico para analizar cómo sus productos fueron evolucionando en el tiempo y para pensar posibles cambios en su estrategia de inversión."
                        placement="right"
                        fontSize="14px"
                      />
                    </Box>
                  </Link>
                  <Bar
                    options={{
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      },
                      responsive: true,
                      scales: {
                        x: {
                          stacked: true,
                        },
                        y: {
                          stacked: true,
                        },
                      },
                      indexAxis: 'y',
                    }}
                    data={dataAnsoff}
                  />
                </Box>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MejoraContinuaView;
