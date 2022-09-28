import React from 'react';
import { Divider, Grid, IconButton, Rating } from '@mui/material';
import { COLORS } from 'helpers/enums/colors';
import { Add } from '@mui/icons-material';

const OKRView = ({}) => {
  return (
    <Grid container sx={{ padding: '30px' }}>
      <Grid item xs={12}>
        <Grid container sx={{ padding: '20px 0' }}>
          <Grid item md={3} sx={{ paddingLeft: '10px' }}>
            <span>Objectivo 1</span>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Progress</span>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Timeline</span>
          </Grid>
          <Grid item md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Due Date</span>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Prioridad</span>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Grado de avance</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            padding: '10px 0',
            background: COLORS.AthensGray,
            alignItems: 'center',
          }}
        >
          <Grid item md={3} sx={{ display: 'flex', paddingLeft: '10px' }}>
            <div style={{ flex: 1 }}>
              <span>OKR 1</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>Barra</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>Feb 1 - Feb 20</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <div
                style={{ display: 'flex', flex: 1, justifyContent: 'center' }}
              >
                <span>Feb 20</span>
              </div>
              <Divider orientation="vertical" flexItem />
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <div
                style={{ display: 'flex', flex: 1, justifyContent: 'center' }}
              >
                <Rating name="read-only" value={4} readOnly />
              </div>
              <Divider orientation="vertical" flexItem />
            </div>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <div
                style={{ display: 'flex', flex: 1, justifyContent: 'center' }}
              >
                <span>25%</span>
              </div>
              <Divider orientation="vertical" flexItem />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            padding: '10px 0',
          }}
        >
          <Grid
            item
            md={12}
            sx={{
              paddingLeft: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{
                paddingLeft: '0',
                fontSize: '1rem',
                ':hover': {
                  background: 'none',
                },
              }}
            >
              <Add fontSize="1rem" />
              <span>Add</span>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={2} />
          <Grid
            item
            md={2}
            sx={{
              display: 'flex',
              padding: '10px 0',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px',
              background: COLORS.AthensGray,
            }}
          >
            <span>Feb 1 - Feb 20</span>
          </Grid>
          <Grid item md={1} />
          <Grid
            item
            md={2}
            sx={{
              display: 'flex',
              padding: '10px 0',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px',
              background: COLORS.AthensGray,
            }}
          >
            <span>5</span>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              display: 'flex',
              padding: '10px 0',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px',
              background: COLORS.AthensGray,
            }}
          >
            <span>25%</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OKRView;
