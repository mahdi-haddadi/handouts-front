export const SEARCH_KEY = "SEARCH_KEY";

export const SET_USER = "SET_USER";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const SET_LOADING = "SET_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const ACTIVATE_USER = "ACTIVATE_USER";
export const LOGOUT = "LOGOUT";

// state search
export interface State_Search {
  search_key: string;
}

// state user
export interface State_User {
  user: IUser | null;
  active: boolean;
  token: string;
  loading: boolean;
  error: string;
  success: string;
}

export interface IUser {
  fullname: string;
  email: string;
  password: string;
}

// type action
export interface searchKeyAction {
  type: typeof SEARCH_KEY;
  payload: string;
}

// user actions
interface SetUserAction {
  type: typeof SET_USER;
  payload: State_User;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  payload: string;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}
interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  pyload: string;
  // dont need
}
interface ActivateUserAction {
  type: typeof ACTIVATE_USER;
  // just get token
}
interface LogoutAction {
  type: typeof LOGOUT;
}

export type ListAction =
  | SignupSuccessAction
  | SetLoadingAction
  | SetUserAction
  | SignupFailAction
  | ActivateUserAction
  | LogoutAction;
