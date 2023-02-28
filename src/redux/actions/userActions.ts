import ActionTypes from "../ActionType";

const UserAction = {
  setLoginData: (data: any) => {
    return {
      type: ActionTypes.SET_LOGIN_DATA,
      payload: data,
    };
  },
  setNewUserData: (data: any) => {
    return {
      type: ActionTypes.SET_NEW_USER_DATA,
      payload: data,
    };
  },
};

export default UserAction;
