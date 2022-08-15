import styled from 'styled-components';
import { Avatar } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

const colors = [COLORS.blueRibbon, COLORS.yellowRoseofSharon, COLORS.greenLaPalma];

export const getBackgroundColorByIndex = (index: number) => colors[index];

export const ProfileAvatar = styled(Avatar)`
  && {
    background-color: ${COLORS.blueRibbon};
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }
`;
