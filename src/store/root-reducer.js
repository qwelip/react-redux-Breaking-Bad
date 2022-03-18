import { combineReducers } from "redux";
import { caractersReducer } from "./caracters/caracters-reducer";
import { filterReducer } from "./filter/filter-reducer";
import { detailsReducer } from "./details/details-reducer";

export const rootReducer = combineReducers({
  caracters: caractersReducer,
  filter: filterReducer,
  caracterInfo: detailsReducer
})