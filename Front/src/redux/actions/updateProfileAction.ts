import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/axios';
import errorMessages from '../../config/errorMessages';
import { AxiosError } from 'axios';

const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async (
      profileData: { firstName: string; lastName: string },
      { rejectWithValue }
    ) => {
      try {
        const response = await api.put('/user/profile', profileData);
        return response.data.body;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.data
        ) {
          const status = error.response.status;
          let errorMessage = errorMessages.UPDATE_PROFILE_FAILED;
  
          if (status === 401) {
            errorMessage = errorMessages.UNAUTHORIZED;
          } else if (status === 404) {
            errorMessage = errorMessages.NOT_FOUND;
          }
  
          return rejectWithValue(errorMessage);
        }
        return rejectWithValue(errorMessages.UPDATE_PROFILE_FAILED);
      }
    }
  );

  export default updateProfile