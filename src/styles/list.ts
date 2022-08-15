import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';
import { SIZES } from 'helpers/enums/sizes';

export const ListRowContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 16px;
`;

export const ListColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
`;

export const ListHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  gap: 20px;
  width: 100%;

  @media (max-width: ${SIZES.smallTablet}px) {
    justify-content: center;
    padding-bottom: 20px;
    gap: 20px;
  }
`;

export const BookmarkContainer = styled.div`
  margin-bottom: 16px;
  display: none;
`;

export const BookmarkButton = styled(Button)`
  font-style: normal;
  font-weight: 400;
`;

export const ListTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${SIZES.smallTablet}px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const ListTitle = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: ${COLORS.grayCloudBurst};
  white-space: nowrap;
`;

export const ListTabsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const ListNewButton = styled(Button)`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: 0;
  border-radius: 6px !important;
  border: 2px solid ${COLORS.blueRibbon} !important;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  gap: 12px;
`;

export const ListButtonText = styled.span`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 500 !important;
  font-size: 14px;
  line-height: 10px 18px;
  text-transform: none !important;
`;

export const ListLinkIcon = styled.div`
  color: ${COLORS.blueRibbon};
  margin-right: 8px;
`;

export const ListLink = styled(RouterLink)`
  color: ${COLORS.blueRibbon};
`;

export const AnchorLink = styled.a`
  color: ${COLORS.blueRibbon};
  display: flex;
  align-items: center;
`;

export const Link = styled(Button)`
  font-style: normal;
  font-weight: 400;
`;

export const FileNameContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.grayCloudBurst};
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
