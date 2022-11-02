import React, { useEffect } from 'react';
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

const BalancedContainer = () => {
  const { balancedId, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const objectives = useSelector(areaObjectivesSelector);
  const { title } = useSelector(titleSelector);

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
      />
    </LayoutContainer>
  );
};

export default BalancedContainer;
