import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
