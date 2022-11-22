import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';

import {
  onAddUnidad,
  onDeleteUnidad,
  onGetOne,
} from 'redux/actions/mckinsey.actions';
import {
  cuadrantesSelector,
  titleSelector,
} from 'redux/selectors/mckinsey.selector';
import { onGetAll as onGetAllComments } from 'redux/actions/comments.actions';

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
import { Box, Grid, Typography } from '@mui/material';

import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { COLORS } from 'helpers/enums/colors';
import { validateField } from 'helpers/validateField';
import { Container } from 'views/FodaView/styles';
import ToolTip from 'components/commons/ToolTip';
import Loading from 'components/commons/Loading';

const McKinseyContainer = () => {
  const { matrizId, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/mckinsey/${matrizId}/results`);

  const onClickGoBackButton = () => navigate(`/projects/${id}`);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const cuadrantes = useSelector(cuadrantesSelector);
  const loading = useSelector((state) => state.mckinsey.loading);

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    dispatch(onGetOne(matrizId));
    dispatch(onGetAllComments('MCKINSEY', matrizId));
  }, []);

  const onAdd = () => {
    setAddModalOpen(true);
  };

  const onSubmit = (formData) => {
    dispatch(onAddUnidad(matrizId, { ...formData, projectId: id }));
    setAddModalOpen(false);
  };

  const onDeleteItem = (unidadId) =>
    dispatch(onDeleteUnidad(matrizId, unidadId));

  const initialValues = {
    nombre: '',
    fuerzaCompetitiva: 10,
    atractivoDeMercado: 10,
  };

  const { title } = useSelector(titleSelector);

  return (
    <LayoutContainer>
      <Container>
        <Grid container sx={{ height: '100%' }}>
          <Grid item sx={{ height: '100%' }}>
            <McKinseyView
              onAdd={onAdd}
              cuadrantes={cuadrantes}
              onClickResultsButton={onClickResultsButton}
              onClickGoBackButton={onClickGoBackButton}
              openComments={(target) => setAnchorElement(target)}
              title={title}
              onDeleteItem={onDeleteItem}
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
        <Modal
          isOpen={isAddModalOpen}
          backgroundColor={COLORS.WildSand}
          disabled
        >
          <CreateContent sx={{ width: '400px' }}>
            <CreateModalTitle>{`Agregar Unidad de Negocio`}</CreateModalTitle>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
              {({ handleSubmit }) => (
                <CustomForm onSubmit={handleSubmit}>
                  <Box sx={{ width: '100%' }}>
                    <Field
                      name="nombre"
                      placeholder="Nombre"
                      component={Input}
                      validate={validateField}
                    />
                    <ErrorMessage name={'nombre'}>
                      {(msg) => (
                        <Typography
                          sx={{
                            textAlign: 'left',
                            color: 'red',
                            marginLeft: 2,
                            marginTop: '2px',
                            fontSize: '14px',
                          }}
                        >
                          {msg}
                        </Typography>
                      )}
                    </ErrorMessage>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Field
                      name="fuerzaCompetitiva"
                      component={SliderInput}
                      label="Fuerza Competitiva"
                      validate={validateField}
                    />
                    <ToolTip
                      text="Fuerza competiva: Dentro del mercado en el que se da la actividad economica: ¿como se esta posicionado en comparación con productos competitivos?"
                      placement="right"
                      fontSize="14px"
                    />
                    <ErrorMessage name={'fuerzaCompetitiva'}>
                      {(msg) => (
                        <Typography
                          sx={{
                            textAlign: 'left',
                            color: 'red',
                            marginLeft: 2,
                            marginTop: '2px',
                            fontSize: '14px',
                          }}
                        >
                          {msg}
                        </Typography>
                      )}
                    </ErrorMessage>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Field
                      name="atractivoDeMercado"
                      component={SliderInput}
                      label="Atractivo De Mercado"
                      validate={validateField}
                    />
                    <ToolTip
                      text="¿Como se compara su mercado con otros? Esta en auge o en decadencia?"
                      placement="right"
                      fontSize="14px"
                    />
                    <ErrorMessage name={'atractivoDeMercado'}>
                      {(msg) => (
                        <Typography
                          sx={{
                            textAlign: 'left',
                            color: 'red',
                            marginLeft: 2,
                            marginTop: '2px',
                            fontSize: '14px',
                          }}
                        >
                          {msg}
                        </Typography>
                      )}
                    </ErrorMessage>
                  </Box>
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
      </Container>
      {loading && <Loading isModalMode message="Cargando Mckinsey" />}
    </LayoutContainer>
  );
};

export default McKinseyContainer;
