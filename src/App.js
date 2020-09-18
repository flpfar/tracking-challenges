import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from './routes';
import { autoLogin } from './actions/user';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.userData.loggedIn);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    if (loggedIn == null) {
      dispatch(autoLogin());
    }
  }, [dispatch, loggedIn]);

  if (loggedIn == null || loading) {
    return <Loading />;
  }

  return (
    <Routes />
  );
}

export default App;
