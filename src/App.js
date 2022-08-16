import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { onInitialize } from 'redux/actions/app.actions';

import { NavigationContainer } from 'containers/NavigationContainer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onInitialize());
  }, [dispatch]);

  return (
    <>
      <NavigationContainer />
    </>
  );
}

export default App;
