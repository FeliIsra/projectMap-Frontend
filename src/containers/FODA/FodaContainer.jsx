import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import FodaView from 'views/FodaView';
import Modal from 'components/commons/Modal';
import Button from 'components/commons/Button';
import { COLORS } from 'helpers/enums/colors';
import {
  ButtonsContainer,
  CardTitle,
  CreateContent,
  Container,
} from 'views/FodaView/styles';
import SelectInput from 'components/inputs/SelectInput';
import {
  onGetOne,
  onGetOptions,
  onInsertFactor,
  onUpdateFactor,
  onDeleteFactor,
  onGetSeeds,
} from 'redux/actions/foda.actions';
import { CustomForm } from 'styles/form';
import { Formik, Field, ErrorMessage } from 'formik';
import {
  amenazasSelector,
  debilidadesSelector,
  fortalezasSelector,
  oportunidadesSelector,
  titleSelector,
} from 'redux/selectors/foda.selector';
import AutoComplete from 'components/inputs/Autocomplete';
import Comments from 'components/comments/Comments';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import { validateField } from 'helpers/validateField';

const FodaContainer = () => {
  const { fodaId, id } = useParams();
  const [factor, setFactor] = useState(null);
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/foda/${fodaId}/results`);
  const onClickResultsButtonGoBack = () => navigate(`/projects/${id}`);
  const disptch = useDispatch();
  const [anchorElement, setAnchorElement] = useState(null);
  const { importancia, intensidad, tendencia, urgencia } = useSelector(
    (state) => state.foda.options
  );
  const debilidades = useSelector(debilidadesSelector);
  const amenazas = useSelector(amenazasSelector);
  const fortalezas = useSelector(fortalezasSelector);
  const oportunidades = useSelector(oportunidadesSelector);
  const seeds = useSelector((state) => state.foda.seeds);
  const { title } = useSelector(titleSelector);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetSeeds());
    disptch(onGetOne(fodaId));
  }, []);

  const onAdd = (factor) => setFactor(factor);

  const onEdit = (factor) => setFactor(factor);

  const onDelete = (factor) => disptch(onDeleteFactor(fodaId, factor._id));

  const onSubmitFactor = (formData) => {
    if (factor._id)
      disptch(onUpdateFactor(fodaId, factor._id, { ...formData }));
    else disptch(onInsertFactor(fodaId, { ...formData, area: factor }));
    setFactor('');
  };

  const defaultValues = {
    descripcion: '',
    importancia: '',
    tendencia: '',
    area: factor,
  };
  const showUrgencia = ['Oportunidad', 'Amenaza'].includes(
    factor?.area || factor
  );
  const optionalValues = showUrgencia ? { urgencia: '' } : { intensidad: '' };
  const initialValues = !!factor?._id
    ? { ...factor }
    : { ...defaultValues, ...optionalValues };

  return (
    <LayoutContainer>
      <Container>
        <FodaView
          onAdd={onAdd}
          debilidades={debilidades}
          amenazas={amenazas}
          oportunidades={oportunidades}
          fortalezas={fortalezas}
          onEdit={onEdit}
          onDelete={onDelete}
          title={title}
          onClickButton={onClickResultsButton}
          onClickButtonGoBack={onClickResultsButtonGoBack}
          buttonTitle="Resultados"
          openComments={(target) => setAnchorElement(target)}
        />
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
            <Comments show tool="FODA" toolId={fodaId} projectId={id} />
          </MenuItem>
        </Menu>
        <Modal isOpen={!!factor} backgroundColor={COLORS.WildSand} disabled>
          <CreateContent>
            <CardTitle>
              {!!factor?.area ? `Editar ${factor?.area}` : `Agregar ${factor}`}
            </CardTitle>
            <Formik onSubmit={onSubmitFactor} initialValues={initialValues}>
              {({ handleSubmit, setFieldValue }) => (
                <CustomForm onSubmit={handleSubmit}>
                  <Box sx={{ width: '100%' }}>
                    <Field
                      name="descripcion"
                      placeholder="Descripcion"
                      component={AutoComplete}
                      options={seeds[factor] || []}
                      optionKey={'descripcion'}
                      onChange={(value) =>
                        setFieldValue(
                          'descripcion',
                          value?.descripcion !== null
                            ? value.descripcion
                            : initialValues.descripcion
                        )
                      }
                      validate={validateField}
                    />
                    <ErrorMessage name="descripcion">
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
                      name="importancia"
                      component={SelectInput}
                      options={importancia}
                      placeholder="Importancia"
                      validate={validateField}
                    />
                    <ErrorMessage name="importancia">
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
                      name={showUrgencia ? 'urgencia' : 'intensidad'}
                      component={SelectInput}
                      options={showUrgencia ? urgencia : intensidad}
                      placeholder={showUrgencia ? 'Urgencia' : 'Intensidad'}
                      validate={validateField}
                    />
                    <ErrorMessage
                      name={showUrgencia ? 'urgencia' : 'intensidad'}
                    >
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
                      name="tendencia"
                      component={SelectInput}
                      options={tendencia}
                      placeholder="Tendencia"
                      validate={validateField}
                    />
                    <ErrorMessage name={'tendencia'}>
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
                  <ButtonsContainer>
                    <Button color="secondary" onClick={() => setFactor('')}>
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      {!!factor?.area ? 'Editar' : 'Agregar'}
                    </Button>
                  </ButtonsContainer>
                </CustomForm>
              )}
            </Formik>
          </CreateContent>
        </Modal>
      </Container>
    </LayoutContainer>
  );
};

export default FodaContainer;
