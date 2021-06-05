/* import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
}); */

import { createStore } from "redux";
import rootReducer from "./reducers";
const initialState = {};
const store = createStore(rootReducer, initialState);

export default store;
