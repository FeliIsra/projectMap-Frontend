import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddButton = ({ onClick }) => {
  return (
    <Grid
      item
      md={12}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <IconButton
        sx={{
          fontSize: '1rem',
          ':hover': {
            background: 'none',
          },
        }}
        onClick={onClick}
      >
        <Add fontSize="inherit" />
        <span>Agregar</span>
      </IconButton>
    </Grid>
  );
};

export default AddButton;
