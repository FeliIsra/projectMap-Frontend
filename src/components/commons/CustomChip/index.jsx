import { Chip } from '@mui/material';
import React from 'react';

const CustomChip = ({ value, total = undefined }) => {
  if (total) value = `${value} / ${total}`;
  return <Chip label={value} sx={{ fontSize: '14px' }} />;
};

export default CustomChip;
