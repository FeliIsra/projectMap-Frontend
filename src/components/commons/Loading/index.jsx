import React from 'react';
import { CircularProgress } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

import Modal from 'components/commons/Modal';

import { LoadingContainer, LoadingText } from './styles';

const Loading = (props) => {
  const {
    isModalMode = false,
    isTitleMode = false,
    message = '',
    size = 65,
  } = props;

  const renderLoading = () => (
    <LoadingContainer isModalMode={isModalMode} isTitleMode={isTitleMode}>
      <CircularProgress size={size} sx={{ color: COLORS.white }} />
      {!!message && <LoadingText>{message}</LoadingText>}
    </LoadingContainer>
  );

  return isModalMode ? (
    <Modal disabled isOpen>
      {renderLoading()}
    </Modal>
  ) : (
    renderLoading()
  );
};

export default Loading;
