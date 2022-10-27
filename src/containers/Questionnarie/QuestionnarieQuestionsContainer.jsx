import Container from '@mui/system/Container/Container';
import { Menu } from 'components/inputs/SelectMenu/styles';
import LayoutContainer from 'containers/LayoutContainer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COLORS } from 'helpers/enums/colors';
import { MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import QuestionnaireQuestionsView from 'views/QuestionnaireQuestionsView';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetQuestions,
  onInsert,
  onGetOne,
} from 'redux/actions/questionnarie.actions';
import { initialValuesSelector } from 'redux/selectors/questionnaire.selector';

const QuestionnarieQuestionsContainer = () => {
  const { questionnaireId, id } = useParams();
  const navigate = useNavigate();
  const onClickButtonGoBack = () =>
    navigate(`/projects/${id}/questionnaire/${questionnaireId}`);
  const onClickNextButton = () =>
    navigate(`/projects/${id}/questionnaire/${questionnaireId}/results`);

  const [anchorElement, setAnchorElement] = useState(null);

  const data = useSelector((state) => {
    const data = state.questionnaire?.data || [];
    const dataList = [];
    Object.entries(data).map(([_key, value]) => dataList.push(value));
    return dataList;
  });

  const initialValues = useSelector(initialValuesSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetQuestions());
    dispatch(onGetOne(questionnaireId));
  }, []);

  const handleSubmit = (formData) => {
    const submit = [];
    formData?.map((questions, chapterId) => {
      questions?.map((answer, questionId) => {
        const chapter = data?.find((x) => x.chapterId === chapterId);
        const question = chapter?.questions?.find(
          (x) => x.questionId === questionId
        );
        const answerId = question?.answers?.find(
          (x) => x.answer === Object.values(answer)[0]
        ).answerId;

        if (chapterId && questionId && answerId)
          submit.push({ chapterId, questionId, answerId });
      });
    });

    dispatch(onInsert(submit, questionnaireId));
    onClickNextButton();
  };

  return (
    <LayoutContainer>
      <Container>
        <QuestionnaireQuestionsView
          title="Preguntas"
          onClickButtonGoBack={onClickButtonGoBack}
          onClickNextButton={onClickNextButton}
          openComments={(target) => setAnchorElement(target)}
          questions={data}
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
        <Menu
          anchorEl={anchorElement}
          onClose={() => setAnchorElement(null)}
          open={!!anchorElement}
          PaperProps={{
            style: {
              width: 500,
            },
          }}
          sx={{
            '& .MuiMenu-list': {
              background: COLORS.AthensGray,
            },
          }}
        >
          <MenuItem key={1} disableRipple>
            <Comments
              show
              tool="QUESTIONNAIRE"
              toolId={questionnaireId}
              projectId={id}
            />
          </MenuItem>
        </Menu>
      </Container>
    </LayoutContainer>
  );
};

export default QuestionnarieQuestionsContainer;
