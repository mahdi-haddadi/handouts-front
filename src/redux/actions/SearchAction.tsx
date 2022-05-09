import { searchKeyAction, SEARCH_KEY } from "../types";

export const searchKey = (key: string): searchKeyAction => {
  return {
    type: SEARCH_KEY,
    payload: key,
  };
};
