import styled from 'styled-components';

import { SIZES } from 'helpers/enums/sizes';
import { COLORS } from 'helpers/enums/colors';

export const PageContainer = styled.div`
  padding: 0 25px;
`;

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: ${SIZES.bigDesktop}px;
  margin: ${({ auth, mb = 0 }: { auth?: boolean; mb?: number }) =>
    auth ? `0 auto ${mb}px` : '80px auto'};
`;

export const ViewContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: ${({
    auth,
    width = '50',
  }: {
    auth?: boolean;
    width?: string;
    spacel?: string;
    spacer?: string;
    spacet?: string;
    spaceb?: string;
  }) => (auth ? '100%' : `${width}%`)};
  padding: 23px 24px;
  margin-left: ${({ spacel = '0' }: { spacel?: string }) => `${spacel}px`};
  margin-right: ${({ spacer = '0' }: { spacer?: string }) => `${spacer}px`};
  margin-top: ${({ spacet = '0' }: { spacet?: string }) => `${spacet}px`};
  margin-bottom: ${({ spaceb = '0' }: { spaceb?: string }) => `${spaceb}px`};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.grayIron};
  border-radius: 6px;

  @media (max-width: ${SIZES.desktop}px) {
    width: ${({ auth }: { auth?: boolean }) => (auth ? '100%' : '70%')};
  }

  @media (max-width: ${SIZES.bigTablet}px) {
    width: ${({ auth }: { auth?: boolean }) => (auth ? '100%' : '100%')};
  }

  @media (max-width: ${SIZES.smallTablet}px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: ${SIZES.mediumPhone}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const MessageContainer = styled.div`
  && {
    background-color: ${COLORS.white};
    padding: 80px 0;
    border: 2px solid ${COLORS.grayAlto};
    border-radius: 6px;
    color: ${COLORS.gray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px;

    .MuiButton-root {
      text-transform: none;
      background-color: ${COLORS.blueRibbon};
    }
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: ${COLORS.grayCloudBurst};
  white-space: nowrap;

  @media (max-width: ${SIZES.smallTablet}px) {
    margin-bottom: 20px;
    text-align: ${({ auth }: { auth?: boolean }) => (auth ? 'center' : 'left')};
  }
`;

export const SubtitleContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.grayAlto};
`;

export const Subtitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.grayCloudBurst};
  font-size: 18px;
`;

export const SearchContainer = styled.div`
  border: 1px solid ${COLORS.grayAlto};
  border-radius: 6px;
`;

export const DataTitle = styled.div`
  color: ${COLORS.grayCloudBurst};
  font-size: 16px;
  margin-bottom: 16px;
`;

export const DataTerm = styled.div`
  color: ${COLORS.gray};
  font-size: 14px;
`;

export const DataDefinition = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  min-height: 14px;

  a {
    color: ${COLORS.blueRibbon};
  }
`;

export const DataLink = styled.a`
  color: ${COLORS.blueRibbon};
  float: right;
`;
