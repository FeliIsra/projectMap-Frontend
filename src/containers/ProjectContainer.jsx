import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { Formik, Field } from 'formik';

import { onGetOne } from 'redux/actions/projects.actions';
import { STEPS, getMenuItems } from 'helpers/enums/steps';
import { COLORS } from 'helpers/enums/colors';

import Modal from 'components/commons/Modal';
import Button from 'components/commons/Button';
import Input from 'components/inputs/Input';
import {
  CustomForm,
  ButtonsContainer,
  Title,
  FormContainer,
} from 'styles/form';

import LayoutContainer from 'containers/LayoutContainer';
import ProjectView from 'views/ProjectView';
import { MenuItemText } from 'views/ProjectView/styles';

const ProjectContainer = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElement, setAnchorElement] = useState(null);
  const [stepValue, setStepValue] = useState(0);
  const [addTool, setAddTool] = useState(null);
  const menuItems = getMenuItems(stepValue);

  useEffect(() => {
    dispatch(onGetOne(id));
  }, []);

  const onClickAdd = (value, anchorElement) => {
    setStepValue(value);
    setAnchorElement(anchorElement);
  };

  const onSubmitTool = (action, formData) => {
    dispatch(action({ ...formData, projectId: id }));
    navigate('createTool');
  };

  const items = STEPS.map((step) => ({
    ...step,
    onClickAdd,
    // TO-DO: cambiar por el valor que corresponde
    progress: Math.floor(Math.random() * 100) + 1,
  }));

  return (
    <LayoutContainer>
      <ProjectView items={items} />
      <Menu
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(null)}
        open={!!anchorElement}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => {
              setAddTool(item);
              setAnchorElement(null);
            }}
          >
            <MenuItemText>{item.title}</MenuItemText>
          </MenuItem>
        ))}
      </Menu>
      <Modal
        isOpen={!!addTool}
        backgroundColor={COLORS.WildSand}
        onClose={() => setAddTool('')}
      >
        <FormContainer>
          <Title style={{ fontSize: 18 }}>{addTool?.title}</Title>
          <Formik
            onSubmit={(values) => onSubmitTool(addTool.action, values)}
            initialValues={{ nombre: '' }}
          >
            {({ handleSubmit }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Field name="nombre" placeholder="Nombre" component={Input} />
                <ButtonsContainer>
                  <Button color="secondary" onClick={() => setAddTool(null)}>
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit">
                    Agregar
                  </Button>
                </ButtonsContainer>
              </CustomForm>
            )}
          </Formik>
        </FormContainer>
      </Modal>
      {}
    </LayoutContainer>
  );
};

export default ProjectContainer;
