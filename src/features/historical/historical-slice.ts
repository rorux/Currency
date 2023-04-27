import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "@api";
import { HistoricalData, HistoricalDto, HistoricalState } from "./types";

export const getHistoricalData = createAsyncThunk<
  HistoricalData,
  HistoricalDto,
  { rejectValue: string }
>("@@historical/get", async function (historicalDto, { rejectWithValue }) {
  try {
    const response = await axios.get<{
      data: Record<string, Record<string, number>>;
    }>(api.historical(historicalDto));

    const rawData = response.data.data;

    const dates = Object.keys(rawData);
    const exchanges = Object.values(rawData);

    const historicalData = Object.keys(exchanges[0]).reduce((acc, item) => {
      return { ...acc, [item]: [] };
    }, {} as HistoricalData);

    exchanges.forEach((exchangeByCurrencies, idx) => {
      Object.entries(exchangeByCurrencies).forEach((curAndVal) => {
        if (historicalData)
          historicalData[curAndVal[0]].push({ x: dates[idx], y: curAndVal[1] });
      });
    });

    return historicalData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    } else return rejectWithValue("Unknown error");
  }
});

const initialState: HistoricalState = {
  data: null,
  loading: false,
  error: null,
};

const historicalSlice = createSlice({
  name: "@@historical",
  initialState,
  reducers: {
    cleanHistoricalError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHistoricalData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHistoricalData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getHistoricalData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const historicalReducer = historicalSlice.reducer;
export const { cleanHistoricalError } = historicalSlice.actions;
