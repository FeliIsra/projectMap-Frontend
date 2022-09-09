import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import { Container } from 'views/PestelView/styles';
import { onGetOne, onGetOptions } from 'redux/actions/mckinsey.actions';

import McKinseyView from 'views/McKinseyView';

const McKinseyContainer = () => {
  const { matrizId, id } = useParams();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/pestel/${matrizId}/results`);
  const disptch = useDispatch();

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetOne(matrizId));
  }, []);

  const onAdd = (factor) => {};

  const onEdit = (factor) => {};

  const onSubmit = (formData) => {};

  const initialValues = {
    descripcion: '',
    importancia: '',
    tendencia: '',
    intensidad: '',
    area: null,
  };

  return (
    <LayoutContainer>
      <Container>
        <McKinseyView
          onAdd={onAdd}
          onEdit={onEdit}
          title={''}
          onClickButton={onClickResultsButton}
          buttonTitle="Resultados"
        />
      </Container>
    </LayoutContainer>
  );
};

export default McKinseyContainer;
