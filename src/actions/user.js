import axios from 'axios';

const login = (user) => async dispatch => {
  try {
    dispatch({
      type: 'LOADING_USER',
    });

    const response = await axios.post(`http://localhost:3001/api/login`, user);

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: 'LOGIN_FAILED',
      payload: error.response.data,
    })
  }
}

export { login };