import Container from '@mui/system/Container/Container';
import { Menu } from 'components/inputs/SelectMenu/styles';
import LayoutContainer from 'containers/LayoutContainer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionnaireView from 'views/QuestionnaireView';
import { COLORS } from 'helpers/enums/colors';
import { MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { onGetQuestions } from 'redux/actions/questionnarie.actions';
import Loading from 'components/commons/Loading';

const QuestionnarieContainer = () => {
  const { questionnaireId, id } = useParams();
  const navigate = useNavigate();
  const onClickResultsButtonGoBack = () => navigate(`/projects/${id}`);
  const onClickNextButton = () =>
    navigate(`/projects/${id}/questionnaire/${questionnaireId}/questions`);

  const [anchorElement, setAnchorElement] = useState(null);

  const data = useSelector((state) => {
    const data = state.questionnaire?.data || [];
    const dataList = [];
    Object.entries(data)?.map(([_key, value]) => dataList.push(value));
    return dataList;
  });

  const loading = useSelector((state) => state.questionnaire.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetQuestions());
  }, []);

  return (
    <>
      {loading && <Loading isModalMode message="Cargando" />}
      <LayoutContainer>
        <Container>
          <QuestionnaireView
            title="Teoria"
            onClickButtonGoBack={onClickResultsButtonGoBack}
            onClickNextButton={onClickNextButton}
            openComments={(target) => setAnchorElement(target)}
            subjects={data?.map((x) => ({
              id: x.chapterId,
              titulo: x.title,
              ppts: x.presentations,
            }))}
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
    </>
  );
};

export default QuestionnarieContainer;
