import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { onInitialize } from 'redux/actions/app.actions';

import { NavigationContainer } from 'containers/NavigationContainer';
import ScrollToTopContainer from 'containers/ScrollToTopContainer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onInitialize());
  }, []);

  return (
    <>
      <ScrollToTopContainer />
      <NavigationContainer />
      <ToastContainer />
    </>
  );
}

export default App;
