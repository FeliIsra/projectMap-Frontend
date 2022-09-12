import React from 'react';
import { Typography } from '@mui/material';

import { CustomSlider } from './styles';

const SliderInput = (props) => {
  const { field, label } = props;
  const { value } = field;

  return (
    <>
      <Typography
        id="label-slider-input"
        gutterBottom
        sx={{
          fontFamily: 'Fira Sans, sans-serif',
          fontSize: 18,
        }}
      >
        {label}
      </Typography>
      <CustomSlider
        {...field}
        value={value}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
    </>
  );
};

export default SliderInput;
