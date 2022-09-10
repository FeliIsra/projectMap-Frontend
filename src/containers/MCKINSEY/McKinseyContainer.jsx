import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Field } from 'formik';

import { onCreate, onGetOne } from 'redux/actions/mckinsey.actions';

import LayoutContainer from 'containers/LayoutContainer';

import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';
import { COLORS } from 'helpers/enums/colors';
import {
  Container,
  CreateContent,
  CreateModalTitle,
  CreateButtonsContainer,
} from 'styles/global';
import { CustomForm } from 'styles/form';

import McKinseyView from 'views/McKinseyView';

const McKinseyContainer = () => {
  const { matrizId, id } = useParams();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projectss/${id}/pestel/${matrizId}/results`);
  const disptch = useDispatch();
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    disptch(onGetOne(matrizId));
  }, []);

  const onAdd = () => {
    setAddModalOpen(true);
  };

  const onEdit = (factor) => {};

  const onSubmit = (formData) => {
    disptch(onCreate({ ...formData, projectId: id }));
  };

  const initialValues = {
    nombre: '',
    fuerzaCompetitiva: 0,
    atractivoDeMercado: 0,
  };

  return (
    <LayoutContainer>
      <Container>
        <McKinseyView
          onAdd={onAdd}
          onClickButton={onClickResultsButton}
          buttonTitle="Resultados"
        />
      </Container>
      <Modal isOpen={isAddModalOpen} backgroundColor={COLORS.WildSand} disabled>
        <CreateContent>
          <CreateModalTitle>{`Agregar Unidad de Negocio`}</CreateModalTitle>
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Field name="nombre" placeholder="Nombre" component={Input} />
                {/* <Field
                  name="fuerzaCompetitiva"
                  component={SelectInput}
                  options={importancia}
                  placeholder="Importancia"
                />
                <Field
                  name="atractivoDeMercado"
                  component={SelectInput}
                  options={intensidad}
                  placeholder={'Intensidad'}
                /> */}
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
