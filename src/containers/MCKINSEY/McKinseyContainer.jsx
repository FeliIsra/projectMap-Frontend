import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';

import { onAddUnidad, onGetOne } from 'redux/actions/mckinsey.actions';
import { cuadrantesSelector } from 'redux/selectors/mckinsey.selector';

import LayoutContainer from 'containers/LayoutContainer';
import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';

import {
  CreateContent,
  CreateModalTitle,
  CreateButtonsContainer,
} from 'styles/global';
import { CustomForm } from 'styles/form';

import McKinseyView from 'views/McKinseyView';
import SliderInput from 'components/inputs/SliderInput';
import { Grid } from '@mui/material';

import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { COLORS } from 'helpers/enums/colors';

const McKinseyContainer = () => {
  const { matrizId, id } = useParams();
  const disptch = useDispatch();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/mckinsey/${matrizId}/results`);

  const onClickGoBackButton = () => navigate(`/projects/${id}`);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const cuadrantes = useSelector(cuadrantesSelector);

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    disptch(onGetOne(matrizId));
  }, []);

  const onAdd = () => {
    setAddModalOpen(true);
  };

  const onSubmit = (formData) => {
    disptch(onAddUnidad(matrizId, { ...formData, projectId: id }));
    setAddModalOpen(false);
  };

  const initialValues = {
    nombre: '',
    fuerzaCompetitiva: 10,
    atractivoDeMercado: 10,
  };

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%' }}>
          <McKinseyView
            onAdd={onAdd}
            cuadrantes={cuadrantes}
            onClickResultsButton={onClickResultsButton}
            onClickGoBackButton={onClickGoBackButton}
            openComments={(target) => setAnchorElement(target)}
          />
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(null)}
        open={!!anchorElement}
        PaperProps={{
          style: {
            width: 500,
          },
        }}
        sx={{
          '& .MuiMenu-list': {
            background: COLORS.AthensGray,
          },
        }}
      >
        <MenuItem key={1} disableRipple>
          <Comments show tool="MCKINSEY" toolId={matrizId} projectId={id} />
        </MenuItem>
      </Menu>
      <Modal isOpen={isAddModalOpen} backgroundColor={COLORS.WildSand} disabled>
        <CreateContent>
          <CreateModalTitle>{`Agregar Unidad de Negocio`}</CreateModalTitle>
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Field name="nombre" placeholder="Nombre" component={Input} />
                <Field
                  name="fuerzaCompetitiva"
                  component={SliderInput}
                  label="Fuerza Competitiva"
                />
                <Field
                  name="atractivoDeMercado"
                  component={SliderInput}
                  label="Atractivo De Mercado"
                />
                <CreateButtonsContainer>
                  <Button
                    color="secondary"
                    onClick={() => setAddModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit">
                    Agregar
                  </Button>
                </CreateButtonsContainer>
              </CustomForm>
            )}
          </Formik>
        </CreateContent>
      </Modal>
    </LayoutContainer>
  );
};

export default McKinseyContainer;
