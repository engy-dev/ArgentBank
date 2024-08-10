import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { login } from '../actions';


interface AuthState {
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isLoggedIn: boolean
}

const initialState: AuthState = {
  token: null,
  status: 'idle',
  error: null,
  isLoggedIn: false
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    logout(state) {
      state.token = null;
      Cookies.remove('token');
      localStorage.removeItem('accounts');
      localStorage.removeItem('accounts_expiration');
    },
  
    loadTokenFromStorage(state) {
      const token = Cookies.get('token');
      if (token) {
        state.token = token;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
        state.isLoggedIn = true
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { logout, loadTokenFromStorage } = authSlice.actions;

export default authSlice.reducer;
