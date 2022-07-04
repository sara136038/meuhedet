import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./reducers/user";
import middlewares from "./middlewares";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: middlewares,
  devTools: composeWithDevTools(),
});

export default store;
