const initialState = false;

const loading = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'LOADING':
      return true;
    case 'LOADED':
      return false;
    default:
      return state;
  }
};

export default loading;
