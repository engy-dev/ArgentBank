import errorMessages from '../../config/errorMessages';
import { AxiosError } from 'axios';
import api from '../../api/axios';
import { setItemWithExpiry } from '../../utils/storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
  

const login = createAsyncThunk(
    'auth/login',
    async (
      credentials: { email: string; password: string; rememberMe: boolean },
      { rejectWithValue }
    ) => {
      try {
        const response = await api.post('/user/login', {
          email: credentials.email,
          password: credentials.password,
        });
        const token = response.data.body.token;
  
        const cookieOptions = {
          expires: credentials.rememberMe ? 30 : 1,
          secure: true,
          sameSite: 'Strict' as const,
        };
  
        Cookies.set('token', token, cookieOptions);
  
        if (credentials.rememberMe) {
          setItemWithExpiry('email', credentials.email, 7);
          setItemWithExpiry('password', credentials.password, 7);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
  
        return token;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.data
        ) {
          return rejectWithValue(
            error.response.data.message || errorMessages.LOGIN_FAILED
          );
        }
        return rejectWithValue(errorMessages.LOGIN_FAILED);
      }
    }
  );

  export default login