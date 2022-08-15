import styled from 'styled-components';
import {
  Dialog,
  DialogContent,
  DialogTitle as TitleContainer,
  DialogActions,
  IconButton,
} from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

export const DialogContainer = styled(Dialog)`
  && {
    [class*='MuiPaper-root'] {
      border-radius: 6px;
    }
  }
`;

export const DialogContentContainer = styled(DialogContent)`
  && {
    & > .MuiPaper-root {
      overflow-y: hidden;
    }

    .MuiPaper-root {
      overflow-y: scroll;
      max-height: calc(100vh - 270px);
    }
  }
`;

export const DialogTitleContainer = styled(TitleContainer)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DialogTitle = styled.span`
  display: flex;
  align-items: center;
  color: ${({ alert }: { alert?: boolean }) => (alert ? COLORS.redMonza : COLORS.grayCloudBurst)};
  font-size: 18px;
`;

export const DialogSubtitle = styled.div`
  margin: 0 24px;
  color: ${COLORS.grayCloudBurst};
`;

export const DialogCloseButton = styled(IconButton)`
  && {
    padding: 0;
    color: ${COLORS.blackEbony};
  }
`;

export const DialogMessage = styled.span`
  color: ${COLORS.blueBayoux};
  font-size: 14px;
`;

export const DialogButtonsContainer = styled(DialogActions)`
  && {
    padding: 20px 24px;
  }
`;

export const DialogFooterContainer = styled.div`
  margin-top: 16px;
`;
