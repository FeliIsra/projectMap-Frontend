import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/system';

import { CustomButton } from './styles';
import { COLORS } from 'helpers/enums/colors';

const customTheme = createTheme({
  components: {
    CustomButton: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.BlueDianne,
          color: COLORS.white,
        },
        primary: {
          backgroundColor: COLORS.GreenJungle,
        },
        secondary: {
          backgroundColor: COLORS.white,
          color: COLORS.GreenJungle,
          border: `1px solid ${COLORS.GreenJungle}`,
        },
      },
    },
  },
});

const Button = ({ children, href, type, onClick, color }) => {
  const renderButton = () => (
    <ThemeProvider theme={customTheme}>
      <CustomButton type={type} onClick={onClick} color={color}>
        {children}
      </CustomButton>
    </ThemeProvider>
  );

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
