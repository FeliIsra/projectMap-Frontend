import { ArrowBack, ArrowForward, Comment } from '@mui/icons-material';
import { Box, IconButton, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import { ButtonContainer, Title, TitleContainer } from 'views/FodaView/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Formik, Field, useFormikContext } from 'formik';
import { CustomForm } from 'styles/form';
import SelectInput from 'components/inputs/SelectInput';
import { COLORS } from 'helpers/enums/colors';
import Button from 'components/commons/Button';

const QuestionnaireQuestionsView = ({
  title,
  onClickButtonGoBack,
  onClickNextButton,
  openComments,
  questions,
  handleSubmit,
  initialValues,
}) => {
  const [subjectId, setSubjectId] = useState(1);
  const handleChange = (event, newValue) => {
    setSubjectId(newValue);
  };

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

  const renderNextButton = () => (
    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
      <ButtonContainer>
        <IconButton size="small" type="submit">
          <ArrowForward />
        </IconButton>
      </ButtonContainer>
    </Box>
  );

  const renderQuestions = () => (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ handleSubmit }) => (
        <CustomForm onSubmit={handleSubmit} sx={{ gap: '0px' }}>
          <Box sx={{ marginTop: '40px', width: '100%' }}>
            <TabContext value={subjectId}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                  {questions?.map((subject) => (
                    <Tab label={subject.title} value={subject.chapterId} />
                  ))}
                </TabList>
              </Box>
              {questions?.map((subject) => (
                <TabPanel value={subject.chapterId}>
                  {subject.questions?.map(
                    ({ questionId, question, answers }) => (
                      <Grid
                        container
                        columnSpacing={3}
                        direction="row"
                        alignItems="center"
                        sx={{
                          backgroundColor:
                            questionId % 2 === 0
                              ? COLORS.Geyser
                              : COLORS.GhostGray,
                          width: '100%',
                          marginLeft: '0px',
                          padding: '20px',
                        }}
                      >
                        <Grid item xs={8}>
                          <Typography key={questionId}>{question}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            name={`${subject.chapterId}.${questionId}.${question}`}
                            component={SelectInput}
                            options={answers?.map((answer) => answer.answer)}
                            placeholder="Respuesta.."
                          />
                        </Grid>
                      </Grid>
                    )
                  )}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      pt: 2,
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    {renderNextButton()}
                  </Box>
                </TabPanel>
              ))}
            </TabContext>
          </Box>
        </CustomForm>
      )}
    </Formik>
  );

  return (
    <>
      {renderTitle()}
      {renderQuestions()}
    </>
  );
};

export default QuestionnaireQuestionsView;
