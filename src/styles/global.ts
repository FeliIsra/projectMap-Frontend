import { createGlobalStyle } from 'styled-components';

import { COLORS } from 'helpers/enums/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${COLORS.grayPorcelain} !important;
  }

  code {
    font-family: 'IBM Plex Sans', sans-serif !important;
  }

  a {
    text-decoration: none;
  }
`;
