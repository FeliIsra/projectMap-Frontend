import { COLORS } from 'helpers/enums/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import CancelIcon from '@mui/icons-material/Cancel';

const { Typography, IconButton } = require('@mui/material');
const { Box } = require('@mui/system');
const React = require('react');

const Consultant = ({
  _id,
  firstName,
  lastName,
  email,
  openModal,
  sharedProjects,
  deleteConsultant,
  goProfile,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: COLORS.Geyser,
        borderRadius: '10px',
        padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      key={_id}
    >
      <Typography>
        {firstName} {lastName}
      </Typography>
      <Box>
        <IconButton onClick={() => goProfile(_id)}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton onClick={() => openModal(sharedProjects, email)}>
          <SwitchAccountIcon />
        </IconButton>
        <IconButton onClick={() => deleteConsultant({ email })}>
          <CancelIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Consultant;
