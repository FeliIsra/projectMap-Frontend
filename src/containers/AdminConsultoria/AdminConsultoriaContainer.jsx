import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';
import { COLORS } from 'helpers/enums/colors';
import { getRandomInt } from 'helpers/randomNumber';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  onAssign,
  onGetOne,
  onRemoveConsultatn,
  onUnAssign,
} from 'redux/actions/consultora.actions';
import { onCreate, onDelete } from 'redux/actions/projects.actions';
import { onRegister } from 'redux/actions/user.actions';
import ConsultoriaView from 'views/ConsultoriaView';
import AssignProjectsModal from 'views/ConsultoriaView/components/assignProjectsModals';
import NewConsultantModal from 'views/ConsultoriaView/components/newConsultantModal';
import NewProjectModal from 'views/ConsultoriaView/components/newProjectModal';

const ConsultoriaContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user.data);
  const consultora = useSelector((state) => state.consultora.data);
  const isLoading = useSelector((state) => state.consultora.loading);

  const [isModalOpenAssignProjects, setisModalOpenAssignProjects] =
    useState(false);
  const [isModalOpenNewConsultant, setIsModalOpenNewConsultant] =
    useState(false);
  const [isModalOpenNewProject, setIsModalOpenNewProject] = useState(false);
  const [projectsConsultantShared, setProjectsConsultantShared] = useState([]);
  const [consultant, setConsultant] = useState(null);

  const onClickProject = (projectId) => navigate(`/projects/${projectId}`);
  const onClickDeleteProject = (id) => {
    dispatch(onDelete(id));
  };

  useEffect(() => {
    if (user?.consultora) dispatch(onGetOne(user.consultora));
  }, [dispatch, user?.consultora]);

  const openModalAssignProjects = (projectsShared, consultant) => {
    setProjectsConsultantShared(projectsShared);
    setConsultant(consultant);
    setisModalOpenAssignProjects(true);
  };

  const closeModalAssignProjects = () => {
    setisModalOpenAssignProjects(false);
  };

  const openModalNewConsultant = () => {
    setIsModalOpenNewConsultant(true);
  };

  const closeModalNewConsultant = () => {
    setIsModalOpenNewConsultant(false);
  };

  const openModalNewProject = () => {
    setIsModalOpenNewProject(true);
  };

  const closeModalNewProject = () => {
    setIsModalOpenNewProject(false);
  };

  const onAssignProjectsSubmit = (formData) => {
    const { projects } = formData;
    const addProjects = [];
    const removeProjects = [];

    projects.map((project) => {
      if (project.checked) {
        addProjects.push(project.id);
      } else {
        removeProjects.push(project.id);
      }
    });

    if (addProjects.length > 0)
      dispatch(
        onAssign(consultora?._id, {
          email: consultant,
          projects: addProjects,
        })
      );

    if (removeProjects.length > 0)
      dispatch(
        onUnAssign(consultora?._id, {
          email: consultant,
          projects: removeProjects,
        })
      );

    closeModalAssignProjects();
  };

  const createConsultantOnSubmit = (formData) => {
    formData.role = 'Consultant';
    formData.confirmPassword = formData.password;
    formData.consultora = consultora?._id;
    dispatch(onRegister(formData));
    closeModalNewConsultant();
  };

  const buildProjectCheckeds = () => {
    const allProjects = consultora?.projects;
    const checkedProjects = projectsConsultantShared;
    const projects = [];

    allProjects?.map((project) => {
      const mappedProject = {
        titulo: project.titulo,
        id: project._id,
        checked: false,
      };
      if (checkedProjects.includes(project._id)) {
        mappedProject.checked = true;
      }

      projects.push(mappedProject);
    });

    return projects;
  };

  const deleteConsultant = (formData) => {
    dispatch(onRemoveConsultatn(consultora?._id, formData));
  };

  const goProfile = (_id) => navigate(`/profile/${_id}`);

  const createNewProjectOnSubmit = (formData) => {
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
    formData.color = color;
    formData.consultora = consultora?._id;
    dispatch(onCreate(formData));
    closeModalNewProject();
  };

  return (
    <LayoutContainer>
      <ConsultoriaView
        title={consultora?.name}
        consultants={consultora?.consultants}
        projects={consultora?.projects}
        onClickDeleteProject={onClickDeleteProject}
        onClickProject={onClickProject}
        openModalAssignProjects={openModalAssignProjects}
        openModalNewConsultat={openModalNewConsultant}
        deleteConsultant={deleteConsultant}
        openModalNewProject={openModalNewProject}
        goProfile={goProfile}
      />
      <AssignProjectsModal
        isOpen={isModalOpenAssignProjects}
        onClose={closeModalAssignProjects}
        initialProjects={buildProjectCheckeds()}
        onSubmit={onAssignProjectsSubmit}
      />
      <NewConsultantModal
        isOpen={isModalOpenNewConsultant}
        onClose={closeModalNewConsultant}
        onSubmit={createConsultantOnSubmit}
      />
      <NewProjectModal
        isOpen={isModalOpenNewProject}
        onClose={closeModalNewProject}
        onSubmit={createNewProjectOnSubmit}
      />
      {isLoading && (
        <Loading isModalMode message="Cargando proyectos de la consultora" />
      )}
    </LayoutContainer>
  );
};

export default ConsultoriaContainer;
