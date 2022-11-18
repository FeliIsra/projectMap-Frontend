import { ArrowBack, Comment } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { ButtonContainer, Title, TitleContainer } from 'views/FodaView/styles';
import { COLORS } from 'helpers/enums/colors';
import PieChartCustom from 'components/commons/PieChart';

const QuestionnaireResultsView = ({
  title,
  onClickButtonGoBack,
  openComments,
  chartsData,
}) => {
  const renderTitle = () => (
    <TitleContainer>
      <ButtonContainer>
        <IconButton size="small" onClick={onClickButtonGoBack}>
          <ArrowBack />
        </IconButton>
      </ButtonContainer>
      <Title style={{ fontSize: 30 }}>{title}</Title>
      <ButtonContainer sx={{ gap: '10px' }}>
        <IconButton
          size="small"
          onClick={(event) => openComments(event.currentTarget)}
        >
          <Comment />
        </IconButton>
      </ButtonContainer>
    </TitleContainer>
  );

  const renderCharts = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '40px',
        gap: '20px',
        width: '1200px',
      }}
    >
      {chartsData?.map((chart, index) => (
        <Box
          sx={{
            textAlign: 'center',
            border: 'solid',
            alignItems: 'center',
            borderRadius: '10px',
            backgroundColor: '#cad2c5',
            width: '500px',
            maxWidth: '500px',
          }}
        >
          <Typography
            sx={{
              marginTop: '8%',
              fontSize: 24,
            }}
          >
            <u>
              <b>Resultado de Tema {index + 1}</b>
            </u>
          </Typography>
          <Box sx={{ alignItems: 'center' }}>
            <PieChartCustom
              data={chart}
              colors={['#2a9d8f', '#E8525B']}
              width={350}
              height={350}
            />
          </Box>
          <Box
            sx={{
              border: 'solid',
              borderRadius: '10px',
              textAlign: 'center',
              width: '80%',
              margin: '0 auto',
              marginBottom: '75px',
              backgroundColor: '#84a98c',
              marginTop: '50px',
            }}
          >
            <Typography sx={{ fontSize: 18 }}>
              {chart[1].value !== 0
                ? 'Revise las respuestas de su cuestionario, algunas de ellas están contestadas de manera errónea. Relea el contenido proporcionado e intente nuevamente.'
                : '¡Usted ha respondido todas las respuestas de manera correcta! Siga con el siguiente cuestionario o comuníquese con su consultor para que el mismo le agregue nuevos cuestionarios.'}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      {renderTitle()}
      {renderCharts()}
    </>
  );
};

export default QuestionnaireResultsView;
