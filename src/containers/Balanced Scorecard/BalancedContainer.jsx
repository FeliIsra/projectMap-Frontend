import React, { useEffect, useState } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useParams } from 'react-router';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { okrToolSelector } from 'redux/selectors/okr.selector';
import BalancedView from 'views/BalancedView';
import {
  onAddObjective,
  onGetOne,
  onUpdateObjective,
} from 'redux/actions/balanceScorecard.actions';
import { areaObjectivesSelector } from 'redux/selectors/balanced.selector';
import { CheckpointsMonths } from 'helpers/enums/balanced';

const BalancedContainer = () => {
  const { balancedId } = useParams();
  const dispatch = useDispatch();
  const [isAddOkrModalOpen, setAddOkrModalOpen] = useState(false);
  const selectedTool = useSelector(okrToolSelector);
  const objectives = useSelector(areaObjectivesSelector);

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
      />
    </LayoutContainer>
  );
};

export default BalancedContainer;
