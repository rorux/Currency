import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from "@features/currencies";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
