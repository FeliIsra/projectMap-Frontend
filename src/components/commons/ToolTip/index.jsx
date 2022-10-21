import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import HelpIcon from '@mui/icons-material/Help';

const ToolTip = ({ title, placement }) => {
  return (
    <Tooltip title={title} arrow placement={placement}>
      <IconButton>
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ToolTip;
