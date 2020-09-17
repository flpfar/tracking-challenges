const initialState = { loading: false }

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'LOADING_USER':
      return { ...state, loading: true }
    case 'USER_LOGGED_IN':
      return { user: payload.user, token: payload.token, loading: false, loggedIn: true };
    case 'USER_LOGGED_OUT':
      return { loading: false, loggedIn: false }
    case 'ACTION_FAILED':
      return { errors: payload.errors, loggedIn: false, loading: false };
    case 'NO_TOKEN':
      return { loading: false, loggedIn: false };
    default:
      return state;
  }
}

export default userReducer;