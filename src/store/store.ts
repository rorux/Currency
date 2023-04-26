import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from "@features/currencies";
import { chartsReducer } from "@features/charts";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    charts: chartsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
