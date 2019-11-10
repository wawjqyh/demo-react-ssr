const initialState = {
  name: 'redux',
  desc: '这个是服务端使用 redux 的 demo'
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

export { reducer as default, initialState as userInitialState };
