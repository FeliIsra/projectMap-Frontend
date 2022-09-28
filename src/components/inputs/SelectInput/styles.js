import { styled } from '@mui/system';
import { COLORS } from 'helpers/enums/colors';
import InputBase from '@mui/material/InputBase';

export const SelectContainer = styled('div')({
  display: 'flex',
  width: '100%',
});

export const BootstrapInput = styled(InputBase)((props) => ({
  '& .MuiInputBase-input': {
    flex: 1,
    borderRadius: 10,
    position: 'relative',
    backgroundColor: COLORS.white,
    border: 'none',
    fontSize: props.fontsize || 20,
    padding: 20,
    fontFamily: ['Fira Sans', 'sans-serif'].join(','),
    '&:focus': {
      border: 'none',
    },
  },
}));
