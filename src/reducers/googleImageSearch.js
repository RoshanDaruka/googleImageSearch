import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { searchImages } from "./searchImages.js";
export const reducers = combineReducers({
  routing: routerReducer,
  searchImages
});
