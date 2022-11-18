import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { onCreate, onGetAll, onDelete } from 'redux/actions/projects.actions';

import LayoutContainer from 'containers/LayoutContainer';
import Modal from 'components/commons/Modal';

import DashboardView from 'views/DashboardView';
import ProjectForm from 'views/DashboardView/ProjectForm';
import { COLORS } from 'helpers/enums/colors';
import { getRandomInt } from 'helpers/randomNumber';
import Loading from 'components/commons/Loading';

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAddNewOpen, setAddNew] = useState(false);
  const { items, itemsShared, loading } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(onGetAll());
  }, []);

  const onSubmit = (formData) => {
    const colors = [
      '#d8f3dcff',
      '#b7e4c7ff',
      '#95d5b2ff',
      '#74c69dff',
      '#52b788ff',
      '#40916cff',
      '#2d6a4fff',
      '#1b4332ff',
    ];

    const random = getRandomInt(8);

    const color = colors[random];

    dispatch(onCreate({ ...formData, color }));
    setAddNew(false);
  };

  const onClickProject = (projectId) => navigate(`/projects/${projectId}`);

  const onClickDelete = (id) => {
    dispatch(onDelete(id));
  };

  return (
    <LayoutContainer>
      <DashboardView
        onAddNew={() => setAddNew(true)}
        onClickProject={onClickProject}
        items={items}
        itemsShared={itemsShared}
        onClickDelete={onClickDelete}
      />
      <Modal isOpen={isAddNewOpen} onClose={() => setAddNew(false)}>
        <ProjectForm onSubmit={onSubmit} />
      </Modal>
      {loading && <Loading isModalMode message="Cargando proyectos" />}
    </LayoutContainer>
  );
};

export default DashboardContainer;
