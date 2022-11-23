import React, { useState } from 'react';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Card,
  TitleContainer,
  Title,
  Description,
  CardContent,
} from './styles';
import { Box, IconButton } from '@mui/material';
import ConfirmDeleteModal from './components/confirmDeleteModal';

const ProjectCard = (props) => {
  const {
    color,
    descripcion,
    titulo,
    onClick,
    onClickDelete,
    onDeleteDisable = false,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDeleteError, setConfirmDeleteError] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
    setConfirmDeleteError(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onSubmit = ({ name }) => {
    if (name !== titulo) {
      setConfirmDeleteError('Nombre del projecto incorrecto.');
    } else {
      onClickDelete();
      closeModal();
    }
  };

  return (
    <>
      <Card>
        <CardContent backgroundcolor={color}>
          <TitleContainer>
            <Title>{titulo}</Title>
            <Box display="flex">
              <IconButton onClick={onClick}>
                <SubdirectoryArrowRightIcon color="black" />
              </IconButton>
              <IconButton
                onClick={() => openModal()}
                disabled={onDeleteDisable}
              >
                <DeleteIcon color="black" />
              </IconButton>
            </Box>
          </TitleContainer>
          <Description>{descripcion}</Description>
        </CardContent>
      </Card>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={onSubmit}
        errors={confirmDeleteError}
        titulo="Eliminar proyecto"
        descripcion="Para confirmar la eliminación, confirme escribiendo el nombre del proyecto"
        placeholder="Nombre del proyecto."
      />
    </>
  );
};

export default ProjectCard;
