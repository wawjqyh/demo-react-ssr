const initialState = {
  name: '',
  desc: ''
};

const reducer = (state, action) => {
  if (typeof state === 'undefined') state = initialState;

  switch (action.type) {
    case 'user/save': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export { reducer as default, initialState as userInitialState}
