import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onCreate, onGetAll } from 'redux/actions/projects.actions';

import LayoutContainer from 'containers/LayoutContainer';
import Modal from 'components/commons/Modal';

import DashboardView from 'views/DashboardView';
import ProjectForm from 'views/DashboardView/ProjectForm';

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const [isAddNewOpen, setAddNew] = useState(false);
  const { items } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(onGetAll());
  }, [dispatch]);

  const onSubmit = (formData) => {
    dispatch(onCreate(formData));
    setAddNew(false);
  };

  return (
    <LayoutContainer>
      <DashboardView onAddNew={() => setAddNew(true)} />
      <Modal isOpen={isAddNewOpen} onClose={() => setAddNew(false)}>
        <ProjectForm onSubmit={onSubmit} />
      </Modal>
    </LayoutContainer>
  );
};

export default DashboardContainer;
