import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
} from 'views/FodaView/styles';
import SelectInput from 'components/inputs/SelectInput';
import {
  onGetOne,
  onGetOptions,
  onInsertFactor,
} from 'redux/actions/foda.actions';
import { CustomForm } from 'styles/form';
import { Formik, Field } from 'formik';
import {
  amenazasSelector,
  debilidadesSelector,
  fortalezasSelector,
  oportunidadesSelector,
} from 'redux/selectors/foda.selector';

const FodaContainer = () => {
  const { fodaId } = useParams();
  const [factor, setFactor] = useState('');
  const disptch = useDispatch();
  const { importancia, intensidad, tendencia, urgencia } = useSelector(
    (state) => state.foda.options
  );
  const debilidades = useSelector(debilidadesSelector);
  const amenazas = useSelector(amenazasSelector);
  const fortalezas = useSelector(fortalezasSelector);
  const oportunidades = useSelector(oportunidadesSelector);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetOne(fodaId));
  }, []);

  const onAdd = (factor) => setFactor(factor);

  const onSubmitFactor = (formData) => {
    disptch(onInsertFactor(fodaId, { ...formData, area: factor }));
    setFactor('');
  };

  const showUrgencia = ['Oportunidad', 'Amenaza'].includes(factor);

  return (
    <LayoutContainer>
      <FodaView
        onAdd={onAdd}
        debilidades={debilidades}
        amenazas={amenazas}
        oportunidades={oportunidades}
        fortalezas={fortalezas}
      />
      <Modal isOpen={!!factor} backgroundColor={COLORS.WildSand} disabled>
        <CreateContent>
          <CardTitle>Agregar {factor}</CardTitle>
          <Formik
            onSubmit={onSubmitFactor}
            initialValues={{
              descripcion: '',
              importancia: '',
              intensidad: '',
              urgencia: '',
              tendencia: '',
              area: factor,
            }}
          >
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
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Create
                  </Button>
                </ButtonsContainer>
              </CustomForm>
            )}
          </Formik>
        </CreateContent>
      </Modal>
    </LayoutContainer>
  );
};

export default FodaContainer;
