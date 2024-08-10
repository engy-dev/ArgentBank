import { createSlice } from '@reduxjs/toolkit';
import { fetchProfile, updateProfile } from '../actions';

interface Profile {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  updatedAt: string;
}

interface ProfileState {
  profile: Profile | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: ProfileState = {
  profile: null,
  status: 'idle',
  error: null,
  isLoggedIn: false,
};



const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  
    clearProfile(state) {
      state.profile = null;
      state.status = 'idle';
      state.error = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        state.isLoggedIn = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = { ...state.profile, ...action.payload };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
