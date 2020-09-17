import api from '../api';

function saveToken(token) {
  localStorage.setItem('token', token);
  api.defaults.headers.Authorization = `Bearer ${token}`
}

function dispatchActionFailed(dispatch, error) {
  dispatch({
    type: 'ACTION_FAILED',
    payload: (error.response && error.response.data) || { errors: error.message },
  })
}

const login = (user) => async dispatch => {
  try {
    dispatch({
      type: 'LOADING_USER',
    });

    const response = await api.post(`/login`, user);

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: response.data,
    });

    saveToken(response.data.token);

  } catch (error) {
    dispatchActionFailed(dispatch, error);
  }
}

const autoLogin = () => async dispatch => {
  const token = localStorage.getItem('token');

  if(token) {
    (async () => {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      try {
        dispatch({
          type: 'LOADING_USER',
        });

        const response = await api.get(`/auto_login`);

        dispatch({
          type: 'USER_LOGGED_IN',
          payload: response.data,
        });
      } catch(error) {
        api.defaults.headers.Authorization = null;
        localStorage.removeItem('token');

        dispatchActionFailed(dispatch, error);
      }
    })();
  } else {
    dispatch({
      type: 'NO_TOKEN',
    });
  }
}

const signUp = (user) => async dispatch => {
  try{
    dispatch({
      type: 'LOADING_USER',
    });

    const response = await api.post(`/signup`, user);

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: response.data,
    });

    saveToken(response.data.token);
  } catch(error) {
    dispatchActionFailed(dispatch, error);
  }
}

const logout = () => dispatch => {
  localStorage.removeItem('token');
  api.defaults.headers.Authorization = null;

  dispatch({
    type: 'USER_LOGGED_OUT'
  })
}

export { login, autoLogin, signUp, logout };