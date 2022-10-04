import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    _id: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state, action) => {
      return state;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.email = action.payload.body.email;
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.createdAt = action.payload.body.createdAt;
      state.updatedAt = action.payload.body.updatedAt;
      state._id = action.payload.body._id;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.error = action.error.message;
      console.log(action.error);
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    });
    builder.addCase(editProfile.rejected, (state, action) => {
      state.error = action.error.message;
      console.log(action.error);
    });
  },
});

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (values, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const user = await axios.post(
        API_URL,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return user.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async ({ firstName, lastName }) => {
    const token = localStorage.getItem("token");
    await axios.put(
      API_URL,
      { firstName, lastName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { firstName, lastName };
  }
);

export default userSlice.reducer;
