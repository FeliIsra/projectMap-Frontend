import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { onGetAll } from 'redux/actions/projects.actions';

import LayoutContainer from 'containers/LayoutContainer';
import ProjectView from 'views/ProjectView';

const ProjectContainer = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAll(id));
  }, []);

  return (
    <LayoutContainer>
      <ProjectView />
    </LayoutContainer>
  );
};

export default ProjectContainer;
