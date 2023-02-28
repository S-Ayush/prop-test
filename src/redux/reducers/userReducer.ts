import ActionTypes from "../ActionType";

const initialState = [
  {
    userName: "admin",
    name: "admin",
    mobile: "7894454569",
    password: "000",
  },
];
const userReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.SET_NEW_USER_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default userReducer;
