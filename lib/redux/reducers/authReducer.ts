import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Token, UserModel } from '../../axios/model';

interface LoginInfo {
  email: string;
  password: string;
}

const initialState = {
  user: undefined as undefined | UserModel,
  token: undefined as undefined | Token,
  loginInfo: {
    email: '',
    password: '',
  } as LoginInfo,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    resetAuthData: (state) => {
      state.user = undefined;
      state.token = undefined;
    },
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

export const { reset, resetAuthData, setUser, setToken, setLoginEmail } =
  authSlice.actions;
export default authSlice.reducer;
