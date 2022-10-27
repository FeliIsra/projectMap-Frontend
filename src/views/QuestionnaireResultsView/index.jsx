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
      <Title>{title}</Title>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '40px',
      }}
    >
      {chartsData?.map((chart, index) => (
        <Box sx={{ textAlign: 'center' }}>
          <Typography>Resultado de Tema {index + 1}</Typography>
          <Box sx={{ alignItems: 'center', margin: '0 auto' }}>
            <PieChartCustom
              data={chart}
              colors={[COLORS.GreenCuttySark, COLORS.RedBurntSienna]}
            />
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
