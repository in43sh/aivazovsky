// initial state
const initialState = {
  user: null
}
// action type 
const LOGIN = 'LOGIN';

// action creator
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, user: action.payload
      };
    default: return state;
  }
}

export default reducer;