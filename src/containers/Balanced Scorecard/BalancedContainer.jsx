import React, { useEffect, useState } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import BalancedView from 'views/BalancedView';
import {
  onAddObjective,
  onGetOne,
  onUpdateObjective,
} from 'redux/actions/balanceScorecard.actions';
import {
  areaObjectivesSelector,
  titleSelector,
} from 'redux/selectors/balanced.selector';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { COLORS } from 'helpers/enums/colors';
import Comments from 'components/comments/Comments';

const BalancedContainer = () => {
  const { balancedId, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const objectives = useSelector(areaObjectivesSelector);
  const { title } = useSelector(titleSelector);
  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    dispatch(onGetOne(balancedId));
  }, []);

  const onSubmitObjetive = (area, formData) => {
    const [firstName, lastName] = formData.responsible.split(' ');
    dispatch(
      onAddObjective(balancedId, {
        ...formData,
        area,
        responsible: `${firstName[0].toUpperCase() + firstName.slice(1)} ${
          lastName ? lastName[0].toUpperCase() + lastName.slice(1) : ''
        }`,
      })
    );
  };

  const onEditObjective = (objectiveId, formData) => {
    dispatch(onUpdateObjective(balancedId, objectiveId, formData));
  };

  return (
    <LayoutContainer>
      <BalancedView
        onSubmitObjetive={onSubmitObjetive}
        objectives={objectives}
        onEditObjective={onEditObjective}
        title={title}
        onClickButtonGoBack={() => navigate(`/projects/${id}`)}
        openComments={(target) => setAnchorElement(target)}
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
            tool="BALANCED_SCORECARD"
            toolId={balancedId}
            projectId={id}
          />
        </MenuItem>
      </Menu>
    </LayoutContainer>
  );
};

export default BalancedContainer;
