import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';

import { onAddUnidad, onGetOne } from 'redux/actions/mckinsey.actions';
import {
  cuadrantesSelector,
  titleSelector,
} from 'redux/selectors/mckinsey.selector';

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
          <CreateContent>
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
                  <Box sx={{ width: '100%' }}>
                    <Field
                      name="fuerzaCompetitiva"
                      component={SliderInput}
                      label="Fuerza Competitiva"
                      validate={validateField}
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
                  <Box sx={{ width: '100%' }}>
                    <Field
                      name="atractivoDeMercado"
                      component={SliderInput}
                      label="Atractivo De Mercado"
                      validate={validateField}
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
    </LayoutContainer>
  );
};

export default McKinseyContainer;
