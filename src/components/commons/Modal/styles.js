import { styled } from '@mui/system';
import Modal from 'react-modal';

import { SIZES } from 'helpers/enums/sizes';
import { COLORS } from 'helpers/enums/colors';

import { ReactComponent as CloseModalSVG } from './assets/close-modal.svg';

export const ModalContainer = styled(Modal)`
  && {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    outline: none;

    @media (max-width: ${SIZES.bigPhone}px) {
      max-width: 100%;
      margin: 0 20px;
    }
  }
`;

export const ModalContent = styled('div')({
  backgroundColor: COLORS.white,
  padding: 10,
  borderRadius: 10,
  maxHeight: '90vh',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '&': {
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */,
  },
});

export const CloseModalContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

export const CloseModalIcon = styled(CloseModalSVG)`
  cursor: pointer;
`;

export const ChildrenContainer = styled('div')({
  padding: 30,
  '@media (min-width:780px)': {
    padding: 15,
  },
});
