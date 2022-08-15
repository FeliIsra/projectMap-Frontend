import { styled } from '@mui/material';
import { AppBar, Avatar, Button, Toolbar } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

export const HeaderContainer = styled(AppBar)({
  height: 64,
  backgroundColor: COLORS.BlueDianne,
  top: 0,
});

export const HeaderAccountContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 25px',
});

export const MenuIcon = styled(Toolbar)({
  color: COLORS.white,
});

export const MenuButtonOutlined = styled(Button)({
  fontStyle: 'normal',
  fontSize: 14,
  lineHeight: 18,
  textTransform: 'none',
  fontWeight: 500,
  padding: '8px 16px',
  marginRight: '1rem',
  marginLeft: '1rem',
  color: 'black',
  border: '2px solid black !important',
  borderRadius: 6,
  height: 'fit-content',
});

export const MenuButton = styled(Button)({
  fontStyle: 'normal',
  fontSize: 14,
  lineHeight: 18,
  textTransform: 'none',
  marginRight: '1rem',
  marginLeft: '1rem',
});

export const AccountButton = styled(Button)({
  fontSize: 16,
  color: COLORS.white,
});

export const ProfileAvatar = styled(Avatar)({
  backgroundColor: COLORS.white,
  color: COLORS.BlueDianne,
  fontWeight: 700,
  fontSize: 14,
});

export const MenuItemText = styled('div')({
  fontSize: 18,
  margin: '4px 20px 4px 8px',
  color: COLORS.BlueDianne,
});
