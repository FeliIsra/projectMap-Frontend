import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

import { COLORS } from 'helpers/enums/colors';

import {
  ModalContainer,
  ModalContent,
  CloseModalContainer,
  CloseModalIcon,
  ChildrenContainer,
} from './styles';

ReactModal.defaultStyles.overlay = {
  ...ReactModal.defaultStyles.overlay,
  backgroundColor: COLORS.modalBackground,
  zIndex: 100,
};

const Modal = (props) => {
  const {
    children,
    disabled = false,
    isOpen,
    onClose = () => {},
    backgroundColor,
  } = props;

  useEffect(() => {
    // 27: Escape key
    const handleKeyUp = (event) =>
      event.keyCode === 27 && !disabled && onClose();
    window.addEventListener('keyup', handleKeyUp, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  return (
    <ModalContainer ariaHideApp={false} isOpen={isOpen}>
      <ModalContent data-testid="modal" backgroundColor={backgroundColor}>
        {!disabled && (
          <CloseModalContainer>
            <CloseModalIcon
              data-testid="modal-close-button"
              onClick={onClose}
            />
          </CloseModalContainer>
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
