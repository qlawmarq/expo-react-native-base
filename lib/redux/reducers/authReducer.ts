import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Token, UserModel } from '../../axios/model';

interface LoginInfo {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined as unknown as UserModel,
    token: undefined as unknown as Token,
    loginInfo: {
      email: '',
      password: '',
    } as LoginInfo,
  },
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
    setToken(state, action: PayloadAction<Token>) {
      state.token = action.payload;
    },
    setLoginEmail(state, action: PayloadAction<LoginInfo>) {
      state.loginInfo = action.payload;
    },
  },
});

export const { setUser, setToken, setLoginEmail } = authSlice.actions;
export default authSlice.reducer;
