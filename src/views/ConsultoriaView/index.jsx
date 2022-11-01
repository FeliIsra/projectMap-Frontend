import ProjectCard from 'components/commons/ProjectCard';
import Consultant from './components/consultant';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const { Box, Typography, IconButton } = require('@mui/material');
const React = require('react');

const ConsultoriaView = ({
  title,
  consultants,
  projects,
  onClickProject,
  onClickDeleteProject,
  openModalAssignProjects,
  openModalNewConsultat,
  deleteConsultant,
  openModalNewProject,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '50px',
          marginLeft: '40px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Fira Sans',
            fontWeight: 500,
            fontSize: 24,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            width: '900px',
            margin: '40px',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Fira Sans',
                fontWeight: 500,
                fontSize: 18,
                marginBottom: '10px',
              }}
            >
              Proyectos
            </Typography>
            <IconButton onClick={() => openModalNewProject()}>
              <AddCircleIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: '#f2f2f2',
              padding: '20px',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              borderRadius: 3,
              maxHeight: '400px',
              overflowY: 'scroll',
              height: '100%',
            }}
          >
            {projects?.map(({ _id, color, titulo, descripcion }) => (
              <Box key={_id} sx={{ width: '270px' }}>
                <ProjectCard
                  key={_id}
                  color={color}
                  titulo={titulo}
                  descripcion={descripcion}
                  onClick={() => onClickProject(_id)}
                  onClickIcon={() => {}}
                  onClickDelete={() => onClickDeleteProject(_id)}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: '400px',
            margin: '40px',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Fira Sans',
                fontWeight: 500,
                fontSize: 18,
                marginBottom: '10px',
              }}
            >
              Consultores
            </Typography>
            <IconButton onClick={() => openModalNewConsultat()}>
              <AddCircleIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: '#f2f2f2',
              padding: '20px',
              borderRadius: 3,
              maxHeight: '400px',
              overflowY: 'scroll',
            }}
          >
            {consultants?.map(
              ({ _id, firstName, lastName, email, sharedProjects }) => (
                <Box sx={{ marginBottom: 2 }}>
                  <Consultant
                    _id={_id}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    openModal={openModalAssignProjects}
                    sharedProjects={sharedProjects}
                    deleteConsultant={deleteConsultant}
                  />
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultoriaView;
