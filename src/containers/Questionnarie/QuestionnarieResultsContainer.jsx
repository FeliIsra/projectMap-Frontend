import Container from '@mui/system/Container/Container';
import { Menu } from 'components/inputs/SelectMenu/styles';
import LayoutContainer from 'containers/LayoutContainer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COLORS } from 'helpers/enums/colors';
import { MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { onGetOne } from 'redux/actions/questionnarie.actions';
import QuestionnaireResultsView from 'views/QuestionnaireResultsView';
import { resultsSelector } from 'redux/selectors/questionnaire.selector';
import Loading from 'components/commons/Loading';

const QuestionnarieResultsContainer = () => {
  const { questionnaireId, id } = useParams();
  const navigate = useNavigate();
  const onClickButtonGoBack = () =>
    navigate(`/projects/${id}/questionnaire/${questionnaireId}/questions`);
  const [anchorElement, setAnchorElement] = useState(null);

  const chartsData = useSelector(resultsSelector);
  const loading = useSelector((state) => state.questionnaire.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetOne(questionnaireId));
  }, []);

  return (
    <>
      {loading && <Loading isModalMode message="Cargando" />}
      <LayoutContainer>
        <Container>
          <QuestionnaireResultsView
            title="Resultados"
            onClickButtonGoBack={onClickButtonGoBack}
            openComments={(target) => setAnchorElement(target)}
            chartsData={chartsData}
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

export default QuestionnarieResultsContainer;
