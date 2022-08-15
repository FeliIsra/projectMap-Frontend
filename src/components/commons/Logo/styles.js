import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

import { COLORS } from 'helpers/enums/colors';

export const LogoLink = styled(Link)({
  color: COLORS.white,
  display: 'flex',
  fontSize: 24,
  textDecoration: 'none',

  span: {
    fontFamily: 'Fira Sans',
    fontWeight: 800,
    fontSize: 30,
  },
});
