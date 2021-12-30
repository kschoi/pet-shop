import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { USERS, usersReducer } from "./users";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  [USERS]: usersReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;

export default function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
  });

  return store;
}
