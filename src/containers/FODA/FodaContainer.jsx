import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import FodaView from 'views/FodaView';
import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
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
} from 'redux/actions/foda.actions';
import { CustomForm } from 'styles/form';
import { Formik, Field } from 'formik';
import {
  amenazasSelector,
  debilidadesSelector,
  fortalezasSelector,
  oportunidadesSelector,
  titleSelector,
} from 'redux/selectors/foda.selector';

const FodaContainer = () => {
  const { fodaId, id } = useParams();
  const [factor, setFactor] = useState(null);
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/foda/${fodaId}/results`);
  const disptch = useDispatch();
  const { importancia, intensidad, tendencia, urgencia } = useSelector(
    (state) => state.foda.options
  );
  const debilidades = useSelector(debilidadesSelector);
  const amenazas = useSelector(amenazasSelector);
  const fortalezas = useSelector(fortalezasSelector);
  const oportunidades = useSelector(oportunidadesSelector);
  const { title } = useSelector(titleSelector);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetOne(fodaId));
  }, []);

  const onAdd = (factor) => setFactor(factor);

  const onEdit = (factor) => setFactor(factor);

  const onDelete = (factor) => disptch(onDeleteFactor(fodaId, factor._id));

  const onSubmitFactor = (formData) => {
    console.log({ formData });
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
          buttonTitle="Resultados"
        />
        <Modal isOpen={!!factor} backgroundColor={COLORS.WildSand} disabled>
          <CreateContent>
            <CardTitle>
              {!!factor?.area ? `Editar ${factor?.area}` : `Agregar ${factor}`}
            </CardTitle>
            <Formik onSubmit={onSubmitFactor} initialValues={initialValues}>
              {({ handleSubmit }) => (
                <CustomForm onSubmit={handleSubmit}>
                  <Field
                    name="descripcion"
                    placeholder="Descripcion"
                    component={Input}
                  />
                  <Field
                    name="importancia"
                    component={SelectInput}
                    options={importancia}
                    placeholder="Importancia"
                  />
                  <Field
                    name={showUrgencia ? 'urgencia' : 'intensidad'}
                    component={SelectInput}
                    options={showUrgencia ? urgencia : intensidad}
                    placeholder={showUrgencia ? 'Urgencia' : 'Intensidad'}
                  />
                  <Field
                    name="tendencia"
                    component={SelectInput}
                    options={tendencia}
                    placeholder="Tendencia"
                  />
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
