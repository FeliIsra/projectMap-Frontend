import { styled } from '@mui/system';
import { styled as MUIStyled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { COLORS } from 'helpers/enums/colors';

export const KeyResultCell = styled('div')({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
});

export const OkrContainer = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '40px',
});

export const Accordion = MUIStyled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'inherit',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

export const AccordionSummary = MUIStyled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: 0,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = MUIStyled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  background: COLORS.WildSand,
}));
