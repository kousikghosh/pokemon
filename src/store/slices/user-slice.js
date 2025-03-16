import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "userSlice/fetchUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      // eslint-disable-next-line no-debugger
      return response.data.results;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  userList: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // setUsersToStore: (state, action) => {
    //   state.userList = action.payload;
    //   state.loading = false;
    //   state.error = null;
    //   console.log("getUserListAction called");
    // },
    updateUser: (state, action) => {
      state.userList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userList = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateUser } = userSlice.actions;
export const { userReducer } = userSlice.reducer;
