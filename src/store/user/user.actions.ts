import { User } from "../../@types/user.types";
import UserActionsTypes from "./user.actions-type";

export const loginUser = (payload: User) => ({
  type: UserActionsTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionsTypes.LOGOUT,
});
