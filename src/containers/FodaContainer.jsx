import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import FodaView from 'views/FodaView';

const FodaContainer = () => {
  return (
    <LayoutContainer>
      <FodaView />
    </LayoutContainer>
  );
};

export default FodaContainer;
