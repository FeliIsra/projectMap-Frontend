import { styled } from '@mui/material';
import { Menu as MUIMenu, MenuItem as MUIMenuItem } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

export const SelectButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  button: {
    color: COLORS.grayCloudBurst,
  },

  span: {
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '18px',
    color: COLORS.grayCloudBurst,
  },

  // @media (max-width: ${SIZES.muiTableChange}px) {
  //   justify-content: flex-start;
  // }
});

export const Menu = styled(MUIMenu)({
  '.MuiPaper-root': {
    padding: '8px',
    gap: '8px',
    background: COLORS.white,

    border: `1px solid ${COLORS.grayIron}`,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '6px',
  },

  '.MuiList-root': {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    gap: '8px',
  },
});

export const MenuItem = styled(MUIMenuItem)((props) => ({
  display: 'flex',
  backgroundColor: 'red',
  justifyContent: 'flex-start',
  padding: '0px',
  color: COLORS.grayCloudBurst,
  background: `${COLORS.white} !important`,

  span: {
    fontStyle: 'normal',
    fontWeight: props.selected ? '700' : '400',
    fontSize: '14px',
    lineHeight: '18px',
  },
}));
