import api from '../api';

function saveToken(token) {
  localStorage.setItem('token', token);
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

function dispatchActionFailed(dispatch, error) {
  dispatch({
    type: 'ACTION_FAILED',
    payload: (error.response && error.response.data) || { errors: error.message },
  });
}

const login = user => async dispatch => {
  try {
    dispatch({
      type: 'LOADING',
    });

    const response = await api.post('/login', user);

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: response.data,
    });

    saveToken(response.data.token);
  } catch (error) {
    dispatchActionFailed(dispatch, error);
  } finally {
    dispatch({
      type: 'LOADED',
    });
  }
};

const autoLogin = () => async dispatch => {
  const token = localStorage.getItem('token');

  if (token) {
    (async () => {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      try {
        dispatch({
          type: 'LOADING',
        });

        const response = await api.get('/auto_login');

        dispatch({
          type: 'USER_LOGGED_IN',
          payload: response.data,
        });
      } catch (error) {
        api.defaults.headers.Authorization = null;
        localStorage.removeItem('token');

        dispatchActionFailed(dispatch, error);
      } finally {
        dispatch({
          type: 'LOADED',
        });
      }
    })();
  } else {
    dispatch({
      type: 'NO_TOKEN',
    });
  }
};

const signUp = user => async dispatch => {
  try {
    dispatch({
      type: 'LOADING',
    });

    const response = await api.post('/signup', user);

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: response.data,
    });

    saveToken(response.data.token);
  } catch (error) {
    dispatchActionFailed(dispatch, error);
  } finally {
    dispatch({
      type: 'LOADED',
    });
  }
};

const logout = () => dispatch => {
  localStorage.removeItem('token');
  api.defaults.headers.Authorization = null;

  dispatch({
    type: 'USER_LOGGED_OUT',
  });
};

const updateGoal = newGoal => async dispatch => {
  try {
    dispatch({
      type: 'LOADING',
    });

    const response = await api.patch('/daily_goal', { daily_goal: newGoal });

    dispatch({
      type: 'USER_GOAL_UPDATED',
      payload: response.data,
    });
  } catch (error) {
    dispatchActionFailed(dispatch, error);
  } finally {
    dispatch({
      type: 'LOADED',
    });
  }
};

const updateTotals = user => ({
  type: 'USER_TOTALS_UPDATED',
  payload: user,
});

const clearErrors = () => ({
  type: 'CLEAR_ERRORS',
});

export {
  login, autoLogin, signUp, logout, updateGoal, updateTotals, clearErrors,
};
