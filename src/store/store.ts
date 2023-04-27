import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from "@features/currencies";
import { chartsReducer } from "@features/charts";
import { historicalReducer } from "@features/historical";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    charts: chartsReducer,
    historical: historicalReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
