import { searchKeyAction, SEARCH_KEY, State_Search } from "../types";

const initialState: State_Search = {
  search_key: "",
};

export const SearchReducer = (
  state = initialState,
  action: searchKeyAction
): State_Search => {
  switch (action.type) {
    case SEARCH_KEY:
      return {
        ...state,
        search_key: action.payload,
      };
    default:
      return state;
  }
};
