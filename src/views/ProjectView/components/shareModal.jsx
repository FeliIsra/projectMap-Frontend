import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Modal from 'components/commons/Modal';
import MultiSelectInput from 'components/commons/MultiSelect';
import Input from 'components/inputs/Input';
import { ErrorMessage, Field, Formik } from 'formik';
import { COLORS } from 'helpers/enums/colors';
import { validateField } from 'helpers/validateField';
import React from 'react';
import { CustomForm } from 'styles/form';

const ShareModal = ({
  initialProjects,
  isOpen,
  onClose,
  onSubmit,
  errorShared,
}) => {
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
          Compartir proyecto
        </span>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit, setFieldValue }) => (
            <CustomForm onSubmit={handleSubmit} sx={{ width: '500px' }}>
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
                    name="email"
                    component={Input}
                    initialProjects={initialProjects}
                    placeholder="Email"
                    validate={validateField}
                    onChange={(email) => {
                      setFieldValue('email', email);
                    }}
                  />
                  <ErrorMessage name={'email'}>
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
                  {errorShared ? (
                    <Typography
                      sx={{
                        textAlign: 'left',
                        color: 'red',
                        marginLeft: 2,
                        marginTop: '2px',
                        fontSize: '14px',
                      }}
                    >
                      {errorShared}
                    </Typography>
                  ) : (
                    <></>
                  )}
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
                  Compartir
                </Button>
              </Box>
            </CustomForm>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ShareModal;
