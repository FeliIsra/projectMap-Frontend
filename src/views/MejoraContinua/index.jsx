import React from 'react';
import { Box, Grid, Paper, Stack, styled } from '@mui/material';
import { Pie, Radar, Bar, Line, PolarArea } from 'react-chartjs-2';
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomInt(1000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRandomInt(1000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const dataLine = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomInt(1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRandomInt(1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const dataRadar = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const dataPolar = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

export const dataHorizontalBar = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomInt(1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRandomInt(1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const dataPie = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderWidth: 1,
    },
  ],
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
            <Item sx={{ display: 'flex' }}>
              <Box>
                <Radar data={dataRadar} />
              </Box>
            </Item>
            <Item>
              <Box>
                <Bar data={dataBar} />
              </Box>
            </Item>
            <Item>
              <Box>
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
                ;
              </Box>
            </Item>
          </Stack>
        </Grid>
        <Grid item md={5} sx={{ display: 'flex', flex: 1 }}>
          <Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
            <Item sx={{ display: 'flex', flex: 1 }}>
              <Box>
                <PolarArea data={dataPolar} />
              </Box>
            </Item>
            <Item sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Line data={dataLine} />;
              </Box>
            </Item>
          </Stack>
        </Grid>
        <Grid item md={3} sx={{ display: 'flex', flex: 1 }}>
          <Stack spacing={2} sx={{ display: 'flex', flex: 1 }}>
            <Item sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Pie
                  data={dataPie}
                  style={{ display: 'flex', width: '100%' }}
                />
              </Box>
            </Item>
            <Item>Item 2</Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MejoraContinuaView;
