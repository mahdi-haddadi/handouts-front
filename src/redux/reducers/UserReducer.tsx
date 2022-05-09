import {
  State_User,
  ListAction,
  SET_USER,
  SIGNUP_FAIL,
  SET_LOADING,
  SIGNUP_SUCCESS,
  ACTIVATE_USER,
  LOGOUT,
} from "../types";

const initialState: State_User = {
  user: null,
  active: false,
  token: "",
  loading: false,
  error: "",
  success: "",
};

export const UserReducer = (
  state = initialState,
  action: ListAction
): State_User => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        active: false,
        loading: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      // dont need
      return {
        ...state,
        success: action.pyload,
        loading: false,
        error: "",
      };
    case ACTIVATE_USER:
      return {
        ...state,
        active: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        active: false,
        loading: false,
      };
    default:
      return state;
  }
};
