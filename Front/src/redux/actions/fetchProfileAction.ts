
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';
import errorMessages from '../../config/errorMessages';
import { AxiosError } from 'axios';
  

const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.post('/user/profile');
        return response.data.body;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.data
        ) {
          const status = error.response.status;
          let errorMessage = errorMessages.FETCH_PROFILE_FAILED;
  
          if (status === 401) {
            errorMessage = 'Unauthorized';
          } else if (status === 404) {
            errorMessage = errorMessages.NOT_FOUND;
          }
  
          return rejectWithValue(errorMessage);
        }
        return rejectWithValue(errorMessages.FETCH_PROFILE_FAILED);
      }
    }
  );

  export default fetchProfile