import api from '../api';

function saveToken(token) {
  localStorage.setItem('token', token);
  api.defaults.headers.Authorization = `Bearer ${token}`
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
    console.log(error.response.data)
    dispatch({
      type: 'LOGIN_FAILED',
      payload: error.response.data,
    })
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

        dispatch({
          type: 'LOGIN_FAILED',
          payload: error.response.data,
        })
      }
    })();
  } else {
    dispatch({
      type: 'NO_TOKEN',
    });
  }
}


export { login, autoLogin };