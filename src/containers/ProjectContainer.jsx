// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Formik, Field, ErrorMessage } from 'formik';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {
  onGetAnsoff,
  onGetBalanced,
  onGetFoda,
  onGetMckinsey,
  onGetOKR,
  onGetOne,
  onGetPestel,
  onGetPorter,
  onGetQuestionnaire,
} from 'redux/actions/projects.actions';
import { STEPS } from 'helpers/enums/steps';
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
import { stepToolsSelector } from 'redux/selectors/project.selector';
import { validateField } from 'helpers/validateField';
import DeleteIcon from '@mui/icons-material/Delete';
import { onDelete as onDeletePestel } from 'redux/actions/pestel.actions';
import { onDelete as onDeletePorter } from 'redux/actions/porter.actions';
import { onDelete as onDeleteFoda } from 'redux/actions/foda.actions';
import { onDelete as onDeleteAnsoff } from 'redux/actions/ansoff.actions';
import { onDelete as onDeleteMckinsey } from 'redux/actions/mckinsey.actions';
import { onDelete as onDeleteBalanceScorecard } from 'redux/actions/balanceScorecard.actions';
import { onDeleteTool as onDeleteOkr } from 'redux/actions/okr.actions';

const ProjectContainer = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElement, setAnchorElement] = useState(null);
  const [stepValue, setStepValue] = useState(0);
  const [addTool, setAddTool] = useState(null);
  // const menuItems = getMenuItems(stepValue);
  const toolsItems = useSelector(stepToolsSelector);

  const projectInfo = useSelector((state) => state.projects.data);
  const onClickButtonGoBack = () => navigate(`/dashboard`);

  useEffect(() => {
    dispatch(onGetOne(id));
    dispatch(onGetFoda(id));
    dispatch(onGetPestel(id));
    dispatch(onGetPorter(id));
    dispatch(onGetAnsoff(id));
    dispatch(onGetMckinsey(id));
    dispatch(onGetOKR(id));
    dispatch(onGetBalanced(id));
    dispatch(onGetQuestionnaire(id));
  }, []);

  const onClickAdd = (value, anchorElement) => {
    setStepValue(value);
    setAnchorElement(anchorElement);
  };

  const onSubmitTool = (action, formData) => {
    dispatch(action({ ...formData, projectId: id }));
    navigate('createTool');
  };

  const deleteTool = (item) => {
    const tool = item.redirectUrl.split('/')[0];
    const id = item._id;
    const deleteTool = {
      pestel: () => {
        dispatch(onDeletePestel(id));
      },
      porter: () => {
        dispatch(onDeletePorter(id));
      },
      foda: () => {
        dispatch(onDeleteFoda(id));
      },
      ansoff: () => {
        dispatch(onDeleteAnsoff(id));
      },
      mckinsey: () => {
        dispatch(onDeleteMckinsey(id));
      },
      balanceScorecard: () => {
        dispatch(onDeleteBalanceScorecard(id));
      },
      okr: () => {
        dispatch(onDeleteOkr(id));
      },
    };
    deleteTool[tool]();
  };

  const onCLickMejoraContinua = () => navigate('mejora-continua');

  const items = STEPS?.map((step) => ({
    ...step,
    onClickAdd,
    // TO-DO: cambiar por el valor que corresponde
    progress: Math.floor(Math.random() * 100) + 1,
  }));

  return (
    <LayoutContainer>
      <ProjectView
        items={items}
        titulo={projectInfo?.titulo}
        onClickButtonGoBack={onClickButtonGoBack}
        project={projectInfo}
        onCLickMejoraContinua={onCLickMejoraContinua}
      />
      <Menu
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(null)}
        open={!!anchorElement}
      >
        {toolsItems[stepValue]?.map((item) => (
          <MenuItem key={item?.key}>
            <Box
              display="flex"
              sx={{ width: '100%', justifyContent: 'space-between' }}
            >
              <MenuItemText
                sx={{ width: '80%' }}
                onClick={() => {
                  if (item._id) {
                    navigate(item.redirectUrl);
                  } else {
                    setAddTool(item);
                    setAnchorElement(null);
                  }
                }}
              >
                {item?.titulo}
              </MenuItemText>
              {item._id && (
                <IconButton
                  sx={{
                    display: 'flex',
                    width: '10px',
                    height: '10px',
                    alignItems: 'right',
                  }}
                  onClick={() => deleteTool(item)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
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
            initialValues={{ titulo: '' }}
          >
            {({ handleSubmit }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="titulo"
                    placeholder="Titulo"
                    component={Input}
                    validate={validateField}
                  />
                  <ErrorMessage name="titulo">
                    {(msg) => (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
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
