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

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAddNewOpen, setAddNew] = useState(false);
  const { items } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(onGetAll());
  }, []);

  const onSubmit = (formData) => {
    const colors = [
      COLORS.Aquamarine,
      COLORS.AthensGray,
      '#f58e90',
      COLORS.GhostGray,
      COLORS.VividTangerine,
      COLORS.WildSand,
    ];

    const random = getRandomInt(6);

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
        onClickDelete={onClickDelete}
      />
      <Modal
        isOpen={isAddNewOpen}
        onClose={() => setAddNew(false)}
        backgroundColor={COLORS.WildSand}
      >
        <ProjectForm onSubmit={onSubmit} />
      </Modal>
    </LayoutContainer>
  );
};

export default DashboardContainer;
