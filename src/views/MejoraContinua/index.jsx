import React from 'react';
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
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

const porterLabels = [
  'Competidores',
  'Clientes',
  'Proveedores',
  'A. Competidores',
  'A. Substitutos',
];

export const dataBar = {
  labels: porterLabels,
  datasets: [
    {
      label: 'PORTER 2021',
      data: porterLabels.map(() => getRandomInt(100)),
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'PORTER 2022',
      data: porterLabels.map(() => getRandomInt(100)),
      backgroundColor: 'rgba(53, 162, 235)',
    },
  ],
};

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

export const dataRadar = {
  labels: ['Amenazas', 'Fortalezas', 'Debilidades', 'Oportunidades'],
  datasets: [
    {
      label: 'FODA 2021',
      data: [40, 30, 25, 24],
      backgroundColor: 'rgba(255, 206, 86)',
      borderWidth: 1,
    },
    {
      label: 'FODA 2022',
      data: [12, 32, 43, 50],
      backgroundColor: 'rgb(107, 99, 255)',
      borderWidth: 1,
    },
  ],
};

export const dataPolar = {
  labels: [
    'Producto 1',
    'Producto 2',
    'Producto 3',
    'Producto 4',
    'Producto 5',
  ],
  datasets: [
    {
      label: 'Productos',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
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

const MejoraContinuaView = () => {
  return (
    <Box
      sx={{
        padding: '30px',
        display: 'flex',
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
                  data={dataRadar}
                  options={{
                    scales: {
                      r: {
                        ticks: {
                          stepSize: 10,
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
                <Bar data={dataBar} />
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
                >
                  MCKINSEY
                </Typography>
                <PolarArea
                  data={dataPolar}
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
                >
                  OKR
                </Typography>
                <Line data={dataLine} />;
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
                >
                  Balanced Scorecard
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
                  data={dataHorizontalBar}
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
                >
                  PESTEL
                </Typography>
                <Doughnut
                  data={dataPie}
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
                  data={ansoffData}
                />
              </Box>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MejoraContinuaView;
