import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  access_token: "",
  id: "",

  isLoading: false,
};

export const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        name = "",
        email = "",
        access_token,
        phone = "",
        address = "",
        avatar = "",
        refresh_token,
        _id,
      } = action.payload;

      state.name = name || "";
      state.email = email || "";
      state.phone = phone || "";
      state.address = address || "";
      state.avatar = avatar || "";
      state.id = _id;
      state.access_token = access_token;
    },
    resetUser: (state, action) => {
      state.name = "";
      state.email = "";
      state.access_token = "";
      state.phone = "";
      state.address = "";
      state.id = "";
      state.avatar = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlices.actions;

export default userSlices.reducer;
