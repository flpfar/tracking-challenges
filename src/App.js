import React, { useEffect } from 'react';
import Routes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { autoLogin } from './actions/user';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.userData.loggedIn)

  useEffect(() => {
    if(loggedIn == null) {
      dispatch(autoLogin());
    }
  }, [dispatch, loggedIn]);

  if(loggedIn == null) {
    return '';
  }

  return (
    <Routes />
  );
}

export default App;
