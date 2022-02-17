import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: '',
    loginInfo: {
      email: '',
      password: '',
    },
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    setToken(state, action: PayloadAction<any>) {
      state.token = action.payload;
    },
    setLoginEmail(state, action: PayloadAction<any>) {
      state.loginInfo = action.payload;
    },
  },
});

export const { setUser, setToken, setLoginEmail } = authSlice.actions;
export default authSlice.reducer;
