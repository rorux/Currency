import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      state.data = state.data.filter(
        (chart) => chart.currency !== action.payload
      );
    },
  },
});

export const chartsReducer = chartsSlice.reducer;
export const { addChart, removeChart } = chartsSlice.actions;
