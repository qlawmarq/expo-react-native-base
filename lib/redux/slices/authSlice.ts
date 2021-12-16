import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload
    },
    setToken(state, action: PayloadAction<any>) {
      state.user = action.payload
    }
  }
})

export const { setUser, setToken } = authSlice.actions
export default authSlice.reducer