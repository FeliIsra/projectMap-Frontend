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
import { useNavigate } from 'react-router-dom';
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
  'Penetracion',
  'Diversificacion',
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
  console.log('dataPESTEL', dataPESTEL);
  const navigate = useNavigate();
  return (
    <Box>
      <TitleContainer sx={{ justifyContent: 'unset' }}>
        <ButtonContainer>
          <IconButton size="small" onClick={onClickButtonGoBack}>
            <ArrowBack />
          </IconButton>
        </ButtonContainer>
        <Title sx={{ marginLeft: '50%', fontSize: 34 }}>Mejora continua</Title>
      </TitleContainer>
      <Box
        sx={{
          padding: '30px',
          display: 'flex',
          width: '100%',
          flex: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4} sx={{ display: 'flex', flex: 1 }}>
            <Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
              <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '100%' }}>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                  >
                    Comparativa FODA
                  </Typography>
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                  >
                    Comparativa PORTER
                  </Typography>
                  <Bar data={dataPorter} />
                </Box>
              </Item>
              <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                    onClick={() =>
                      dataMckinsey?.id &&
                      navigate(
                        `/projects/${projectId}/mckinsey/${dataMckinsey.id}`
                      )
                    }
                  >
                    MCKINSEY
                  </Typography>
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                    onClick={() =>
                      dataBalanced?.id &&
                      navigate(
                        `/projects/${projectId}/balanceScorecard/${dataBalanced.id}`
                      )
                    }
                  >
                    Balanced Scoredcard
                  </Typography>
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                    onClick={() =>
                      dataOkrs?.id &&
                      navigate(`/projects/${projectId}/okr/${dataOkrs.id}`)
                    }
                  >
                    OKR
                  </Typography>
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                    onClick={() =>
                      dataPESTEL?.id &&
                      navigate(`/projects/${projectId}/pestel/${dataPESTEL.id}`)
                    }
                  >
                    PESTEL
                  </Typography>
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Fira Sans',
                      fontSize: '1.3rem',
                    }}
                  >
                    ANSOFF
                  </Typography>
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
