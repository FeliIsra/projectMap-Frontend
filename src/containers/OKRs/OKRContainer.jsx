import React, { useEffect } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useParams } from 'react-router';
import OKRView from 'views/OKRView';
import {
  Box,
  Grid,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  onAddKeyResult,
  onAddOkr,
  onEditKeyResult,
  onGetOneTool,
} from 'redux/actions/okr.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ButtonsContainer, CustomForm } from 'styles/form';
import { ErrorMessage, Field, Formik } from 'formik';
import { CreateContent, CreateModalTitle } from 'styles/global';
import Modal from 'components/commons/Modal';
import Button from 'components/commons/Button';
import Input from 'components/inputs/Input';
import { quartersOptions } from 'helpers/enums/okr';
import { okrToolSelector } from 'redux/selectors/okr.selector';
import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { COLORS } from 'helpers/enums/colors';
import { validateField } from 'helpers/validateField';

const OKRContainer = () => {
  const { okrToolId, id } = useParams();
  const dispatch = useDispatch();
  const [isAddOkrModalOpen, setAddOkrModalOpen] = useState(false);
  const selectedTool = useSelector(okrToolSelector);

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    dispatch(onGetOneTool(okrToolId));
  }, []);

  const onSubmitOkr = (formData) => {
    dispatch(onAddOkr(okrToolId, formData));
    setAddOkrModalOpen(false);
  };

  const onSubmitKeyResult = (okrId, formData) => {
    const [firstName, lastName] = formData.responsible.split(' ');
    dispatch(
      onAddKeyResult(okrToolId, okrId, {
        ...formData,
        responsible: `${firstName[0].toUpperCase() + firstName.slice(1)} ${
          lastName ? lastName[0].toUpperCase() + lastName.slice(1) : ''
        }`,
      })
    );
  };

  const onEditKeyResultStatus = (okrId, keyResultId, formData) => {
    dispatch(onEditKeyResult(okrToolId, okrId, keyResultId, formData));
  };

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%', width: '100%' }}>
          <OKRView
            openAddOkrModal={() => setAddOkrModalOpen(true)}
            onSubmitKeyResult={onSubmitKeyResult}
            okrs={selectedTool?.okrs}
            titulo={selectedTool.titulo}
            onEditKeyResultStatus={onEditKeyResultStatus}
            openComments={(target) => setAnchorElement(target)}
          />
          <Menu
            anchorEl={anchorElement}
            onClose={() => setAnchorElement(null)}
            open={!!anchorElement}
            PaperProps={{
              style: {
                width: 500,
              },
            }}
            sx={{
              '& .MuiMenu-list': {
                background: COLORS.AthensGray,
              },
            }}
          >
            <MenuItem key={1} disableRipple>
              <Comments show tool="OKR" toolId={okrToolId} projectId={id} />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Modal
        isOpen={isAddOkrModalOpen}
        backgroundColor={COLORS.WildSand}
        disabled
      >
        <CreateContent>
          <CreateModalTitle>Agregar nuevo OKR</CreateModalTitle>
          <Formik
            onSubmit={onSubmitOkr}
            initialValues={{ description: '', area: '', quarter: 0 }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="description"
                    placeholder="Descripcion"
                    type="text"
                    component={Input}
                    validate={validateField}
                  />
                  <ErrorMessage name={'description'}>
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
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="area"
                    placeholder="Area"
                    type="text"
                    component={Input}
                    validate={validateField}
                  />
                  <ErrorMessage name={'area'}>
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
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="quarter"
                    component={({ field }) => (
                      <>
                        <InputLabel>
                          Seleccione el trimestre a utilizar
                        </InputLabel>
                        <ToggleButtonGroup
                          sx={{ color: COLORS.BlueDianne }}
                          exclusive
                          onChange={(event, value) =>
                            setFieldValue('quarter', value)
                          }
                          value={field.value}
                        >
                          {quartersOptions?.map(({ value, label }) => (
                            <ToggleButton value={value}>{label}</ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                      </>
                    )}
                    validate={validateField}
                  />
                  <ErrorMessage name={'quarter'}>
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
                  <Button
                    color="secondary"
                    onClick={() => setAddOkrModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit">
                    Agregar
                  </Button>
                </ButtonsContainer>
              </CustomForm>
            )}
          </Formik>
        </CreateContent>
      </Modal>
    </LayoutContainer>
  );
};

export default OKRContainer;
