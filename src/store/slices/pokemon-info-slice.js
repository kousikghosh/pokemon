import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const pokemonInfoFetch = createAsyncThunk(
  "pokemonInfoSlice/pokemonInfoFetch",
  async (param, thunkAPI) => {
    try {
      // eslint-disable-next-line no-debugger
      const response = await axios.get(param);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  pokemonInfo: {},
  loading: false,
  error: null,
};

export const pokemonInfoSlice = createSlice({
  name: "pokemonInfoSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(pokemonInfoFetch.fulfilled, (state, action) => {
        state.pokemonInfo = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(pokemonInfoFetch.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(pokemonInfoFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { pokemonInfoReducer } = pokemonInfoSlice.reducer;
