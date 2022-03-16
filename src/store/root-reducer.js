import { combineReducers } from "redux";
import { caractersReducer } from "./caracters/caracters-reducer";
import { filterReducer } from "./filter/filter-reducer";

export const rootReducer = combineReducers({
  caracters: caractersReducer,
  filter: filterReducer
})