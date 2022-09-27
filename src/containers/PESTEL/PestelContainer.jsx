import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';
import { COLORS } from 'helpers/enums/colors';
import {
  ButtonsContainer,
  CardTitle,
  CreateContent,
  Container,
} from 'views/PestelView/styles';
import PestelView from 'views/PestelView';
import SelectInput from 'components/inputs/SelectInput';
import {
  onGetOne,
  onGetOptions,
  onInsertFactor,
  onUpdateFactor,
  onDeleteFactor,
  onGetSeeds,
} from 'redux/actions/pestel.actions';
import { CustomForm } from 'styles/form';
import { Formik, Field } from 'formik';
import {
  politicoSelector,
  economicoSelector,
  socialSelector,
  tecnologicoSelector,
  ambientalSelector,
  legalSelector,
  titleSelector,
} from 'redux/selectors/pestel.selector';
import AutoComplete from 'components/inputs/Autocomplete';

const PestelContainer = () => {
  const { pestelId, id } = useParams();
  const [factor, setFactor] = useState(null);
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/pestel/${pestelId}/results`);
  const disptch = useDispatch();
  const { importancia, intensidad, tendencia } = useSelector((state) => {
    return state.pestel.options;
  });

  const politicos = useSelector(politicoSelector);
  const economicos = useSelector(economicoSelector);
  const sociales = useSelector(socialSelector);
  const tecnologicos = useSelector(tecnologicoSelector);
  const ambientales = useSelector(ambientalSelector);
  const legales = useSelector(legalSelector);
  const seeds = useSelector((state) => state.pestel.seeds);
  const { title } = useSelector(titleSelector);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetSeeds());
    disptch(onGetOne(pestelId));
  }, []);

  const onAdd = (factor) => setFactor(factor);

  const onEdit = (factor) => setFactor(factor);

  const onDelete = (factor) => disptch(onDeleteFactor(pestelId, factor._id));

  const onSubmitFactor = (formData) => {
    if (factor._id)
      disptch(onUpdateFactor(pestelId, factor._id, { ...formData }));
    else disptch(onInsertFactor(pestelId, { ...formData, area: factor }));
    setFactor('');
  };

  const defaultValues = {
    descripcion: '',
    importancia: '',
    tendencia: '',
    intensidad: '',
    area: factor,
  };
  const initialValues = !!factor?._id ? { ...factor } : { ...defaultValues };

  return (
    <LayoutContainer>
      <Container>
        <PestelView
          onAdd={onAdd}
          politicos={politicos}
          economicos={economicos}
          sociales={sociales}
          tecnologicos={tecnologicos}
          ambientales={ambientales}
          legales={legales}
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
              {({ handleSubmit, setFieldValue }) => (
                <CustomForm onSubmit={handleSubmit}>
                  <Field
                    name="descripcion"
                    placeholder="Descripcion"
                    component={AutoComplete}
                    options={factor ? seeds[factor] : []}
                    optionKey={'descripcion'}
                    onChange={(value) =>
                      setFieldValue(
                        'descripcion',
                        value?.descripcion !== null
                          ? value.descripcion
                          : initialValues.descripcion
                      )
                    }
                  />
                  <Field
                    name="importancia"
                    component={SelectInput}
                    options={importancia}
                    placeholder="Importancia"
                  />
                  <Field
                    name={'intensidad'}
                    component={SelectInput}
                    options={intensidad}
                    placeholder={'Intensidad'}
                  />
                  <Field
                    name="tendencia"
                    component={SelectInput}
                    options={tendencia}
                    placeholder={'Tendencia'}
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

export default PestelContainer;
