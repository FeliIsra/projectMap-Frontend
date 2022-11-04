import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import HelpIcon from '@mui/icons-material/Help';

const ToolTip = ({ text, placement, fontSize }) => {
  return (
    <Tooltip
      title={<p style={{ fontSize: fontSize }}>{text}</p>}
      arrow
      placement={placement}
      sx={{ fontSize: fontSize }}
    >
      <IconButton>
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ToolTip;
