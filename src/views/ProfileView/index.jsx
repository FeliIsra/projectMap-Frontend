import React from 'react';
import { Box, FormLabel, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import Input from 'components/inputs/Input';
import { COLORS } from 'helpers/enums/colors';

const ProfileView = ({ user }) => {
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
            gap: '30px',
            width: '100%',
          }}
        >
          <Formik initialValues={{ ...user }} onSubmit={() => {}}>
            <>
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
                <FormLabel>Mail</FormLabel>
                <Field
                  name="email"
                  type="text"
                  placeholder="Mail"
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
            </>
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileView;
