import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import saga from "./sagas/index";
import userReducer from "./slices/userSlices";

const sagaMiddleware = createSagaMiddleware(saga);

const logger = createLogger({
  // ...options
  level: "log",
});

const store = configureStore(
  {
    reducer: {
      user: userReducer,
    },
  },
  applyMiddleware([logger, sagaMiddleware])
);

export default store;
