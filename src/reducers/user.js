const initialState = { }

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'USER_LOGGED_IN':
      return { user: payload.user, token: payload.token, loggedIn: true };
    case 'USER_LOGGED_OUT':
      return { loggedIn: false }
    case 'USER_GOAL_UPDATED':
      return { ...state, user: payload.user }
    case 'ACTION_FAILED':
      return { errors: payload.errors, loggedIn: false };
    case 'NO_TOKEN':
      return { loggedIn: false };
    default:
      return state;
  }
}

export default user;