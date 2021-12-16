import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
  reducer: rootReducer
});
 
export type RootState = ReturnType<typeof rootReducer>
 
export default rootReducer