import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Modal from 'components/commons/Modal';
import MultiSelectInput from 'components/commons/MultiSelect';
import { ErrorMessage, Field, Formik } from 'formik';
import { COLORS } from 'helpers/enums/colors';
import { validateField } from 'helpers/validateField';
import React from 'react';
import { CustomForm } from 'styles/form';

const UnShareModal = ({ sharedUsers, isOpen, onClose, onSubmit }) => {
  const initialValues = {};
  return (
    <Modal isOpen={isOpen} backgroundColor={COLORS.WildSand} disabled>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <span
          style={{
            fontFamily: "'Fira Sans'",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            color: COLORS.BlueDianne,
          }}
        >
          Descompartir usuarios
        </span>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit, setFieldValue }) => (
            <CustomForm onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  gap: 15,
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="projects"
                    component={MultiSelectInput}
                    initialProjects={sharedUsers}
                    placeholder="Email"
                    validate={validateField}
                    onChange={(projects) => {
                      setFieldValue('projects', projects);
                    }}
                  />
                  <ErrorMessage name={'projects'}>
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
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Button color="secondary" onClick={() => onClose()}>
                  Cancelar
                </Button>
                <Button color="primary" type="submit">
                  Guardar
                </Button>
              </Box>
            </CustomForm>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default UnShareModal;
