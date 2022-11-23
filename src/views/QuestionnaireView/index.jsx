import { ArrowBack, ArrowForward, Comment } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { ButtonContainer, Title, TitleContainer } from 'views/FodaView/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextStepper from 'components/commons/TextCarousel';
import parse from 'html-react-parser';

const QuestionnaireView = ({
  title,
  onClickButtonGoBack,
  onClickNextButton,
  openComments,
  subjects,
}) => {
  const [subjectId, setSubjectId] = useState(1);

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

  const handleChange = (event, newValue) => {
    setSubjectId(newValue);
  };

  const renderPPTs = (ppts) => {
    const pptsReady = ppts?.map((ppt, index) => ({
      label: `Página ${index + 1}`,
      description: parse(ppt),
    }));

    return <TextStepper steps={pptsReady} />;
  };

  const renderTabs = () => (
    <Box sx={{ marginTop: '40px' }}>
      <TabContext value={subjectId}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            {subjects?.map((subject) => (
              <Tab label={subject.titulo} value={subject.id} />
            ))}
          </TabList>
        </Box>
        {subjects?.map((subject) => (
          <TabPanel value={subject.id}>{renderPPTs(subject.ppts)}</TabPanel>
        ))}
      </TabContext>
    </Box>
  );

  const renderNextButton = () => (
    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
      <ButtonContainer>
        <IconButton size="small" onClick={onClickNextButton}>
          <ArrowForward />
        </IconButton>
      </ButtonContainer>
    </Box>
  );

  return (
    <>
      {renderTitle()}
      {renderTabs()}
      {renderNextButton()}
    </>
  );
};

export default QuestionnaireView;
