import axios from "axios";
import { Dispatch } from "redux";
import {
  ACTIVATE_USER,
  IUser,
  LOGOUT,
  SET_LOADING,
  SET_USER,
  SIGNUP_FAIL,
} from "../types";

export const set_user = (user: IUser, token: string) => {
  return {
    type: SET_USER,
    payload: { user, token },
  };
};

export const set_loading = () => {
  return {
    type: SET_LOADING,
  };
};

export const set_error_msg = (msg: string) => {
  return {
    type: SIGNUP_FAIL,
    payload: msg,
  };
};

export const active_user = () => {
  return {
    type: ACTIVATE_USER,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
