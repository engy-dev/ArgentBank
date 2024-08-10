import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteTransaction,
} from '../../mocks/mockApi';
import errorMessages from '../../config/errorMessages';
import { AxiosError } from 'axios';


const deleteTransactionThunk = createAsyncThunk(
  'transaction/deleteTransaction',
  async (
    { accountId, transactionId }: { accountId: string; transactionId: string },
    { rejectWithValue }
  ) => {
    try {
      await deleteTransaction(accountId, transactionId);
      return transactionId;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.data
      ) {
        const status = error.response.status;
        let errorMessage = errorMessages.DELETE_TRANSACTION_FAILED;
        if (status === 401) {
          errorMessage = errorMessages.UNAUTHORIZED;
        } else if (status === 404) {
          errorMessage = errorMessages.NOT_FOUND;
        }
        return rejectWithValue(errorMessage);
      }
      return rejectWithValue(errorMessages.DELETE_TRANSACTION_FAILED);
    }
  }
);

export default deleteTransactionThunk