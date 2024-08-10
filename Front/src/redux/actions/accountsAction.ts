import { fetchAccounts } from '../../mocks/mockApi';
import errorMessages from '../../config/errorMessages';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Account {
  userId: string;
  accountId: string;
  title: string;
  amount: string;
  description: string;
}


const fetchAccountsThunk = createAsyncThunk(
    'account/fetchAccounts',
    async (userId: string, { rejectWithValue }) => {
      try {
        const response = (await fetchAccounts(userId)) as {
          data: { body: Account[] };
        };
        return response.data.body;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.data
        ) {
          const status = error.response.status;
          let errorMessage = errorMessages.FETCH_ACCOUNTS_FAILED;
          if (status === 401) {
            errorMessage = errorMessages.UNAUTHORIZED;
          } else if (status === 404) {
            errorMessage = errorMessages.NOT_FOUND;
          }
          return rejectWithValue(errorMessage);
        }
        return rejectWithValue(errorMessages.FETCH_ACCOUNTS_FAILED);
      }
    }
  );

  export default fetchAccountsThunk