import React from 'react';
import { Box, ButtonBase, FormLabel, Typography } from '@mui/material';
import { ErrorMessage, Field, Formik } from 'formik';
import Input from 'components/inputs/Input';
import { COLORS } from 'helpers/enums/colors';
import { validateCalendlyLink } from 'helpers/validateField';

const ProfileView = ({ user, onSubmit }) => {
  const onSubmitForm = (values) => onSubmit(values);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '60%',
          gap: '30px',
          backgroundColor: COLORS.Bone,
          padding: '20px',
          width: '100%',
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Typography sx={{ fontSize: '30px', fontWeight: '800' }}>
            Mi perfil
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Formik initialValues={user} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <FormLabel>Nombre</FormLabel>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="Nombre"
                      component={Input}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <FormLabel>Apellido</FormLabel>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Apellido"
                      component={Input}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <FormLabel>Email</FormLabel>
                    <Field
                      name="email"
                      type="text"
                      placeholder="Email"
                      component={Input}
                      disable
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <FormLabel>Role</FormLabel>
                    <Field
                      name="role"
                      type="text"
                      placeholder="Role"
                      component={Input}
                      disable
                    />
                  </Box>
                  {user?.role === 'Consultant' && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <FormLabel>Calendly Link</FormLabel>
                      <Field
                        name="calendlyUser"
                        type="text"
                        component={Input}
                        placeholder="Ingrese el link de Calendly"
                        validate={validateCalendlyLink}
                      />
                      <ErrorMessage name={'calendlyUser'}>
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
                  )}
                  <Box
                    sx={{
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}
                  >
                    <ButtonBase
                      type="submit"
                      sx={{
                        padding: '16px 20px',
                        borderRadius: '15px',
                        backgroundColor: COLORS.BlueDianne,
                        color: COLORS.white,
                        fontSize: '16px',
                      }}
                    >
                      Guardar
                    </ButtonBase>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileView;
