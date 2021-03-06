import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// SIGN UP
const signupAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "user/signup",
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};

export const signup = createAsyncThunk("auth/signup", signupAsync);

// LOGIN
const loginAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "user/login",
      method: "POST",
      data,
      headers: {},
    });
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};
export const login = createAsyncThunk("auth/login", loginAsync);

const updateAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "auth/update",
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    console.log(err);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const update = createAsyncThunk("auth/cabinet", updateAsync);
