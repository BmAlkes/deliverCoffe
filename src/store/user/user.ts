import { User } from "../../@types/user.types";
import UserActionsTypes from "./user.actions-type";

interface initialState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: initialState = {
  currentUser: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionsTypes.LOGIN:
      return { ...state, currentUser: action.payload, isAuthenticated: true };

    case UserActionsTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default userReducer;
