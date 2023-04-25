import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@api";
import { CurrenciesState } from "./types";

export const getCurrenciesList = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("@@currencies/get", async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get<{ data: Record<string, unknown> }>(
      api.currencies
    );
    return Object.keys(response.data.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    } else return rejectWithValue("Unknown error");
  }
});

const initialState: CurrenciesState = {
  data: [],
  loading: false,
  error: null,
};

const currenciesSlice = createSlice({
  name: "@@currencies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrenciesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrenciesList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getCurrenciesList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const currenciesReducer = currenciesSlice.reducer;
