import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";
import { Chart, ChartsState } from "./types";

const initialState: ChartsState = {
  data: [],
};

const chartsSlice = createSlice({
  name: "@@charts",
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<Chart>) => {
      state.data.push(action.payload);
    },
    removeChart: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((chart) => chart.id !== action.payload);
    },
  },
});

export const chartsReducer = chartsSlice.reducer;
export const { addChart, removeChart } = chartsSlice.actions;

const charts = (state: RootState) => state.charts.data;

export const selectStringifiedChartsList = createSelector(
  [charts],
  (charts): string => {
    const chartList = charts.reduce(
      (acc, chart) => [...acc, chart.currency],
      [] as string[]
    );
    return chartList.join(",");
  }
);
