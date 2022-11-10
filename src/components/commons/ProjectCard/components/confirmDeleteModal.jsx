import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
import { ErrorMessage, Field, Formik } from 'formik';
import { COLORS } from 'helpers/enums/colors';
import { validateField } from 'helpers/validateField';
import React from 'react';
import { CustomForm } from 'styles/form';

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onSubmit,
  errors,
  titulo,
  descripcion,
  placeholder,
}) => {
  const initialValues = {};
  return (
    <Modal isOpen={isOpen} backgroundColor={COLORS.WildSand} disabled>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: '550px',
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
          {titulo}
        </span>
        <span
          style={{
            fontFamily: "'Fira Sans'",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            color: COLORS.BlueDianne,
          }}
        >
          {descripcion}
        </span>
        <Box sx={{ alignItems: 'center' }}>
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit, setFieldValue }) => (
              <CustomForm
                onSubmit={handleSubmit}
                sx={{ width: '500px', margin: '0 auto' }}
              >
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
                      name="name"
                      component={Input}
                      placeholder={placeholder}
                      validate={validateField}
                      onChange={(name) => {
                        setFieldValue('name', name);
                      }}
                    />
                    <ErrorMessage name={'name'}>
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
                    {errors ? (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {errors}
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
                    Confirmar
                  </Button>
                </Box>
              </CustomForm>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;
