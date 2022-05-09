import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SearchReducer } from "./reducers/SearchReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  search_key: SearchReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducers>;

export default store;
