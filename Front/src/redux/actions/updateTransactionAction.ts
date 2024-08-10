import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateTransaction,
} from '../../mocks/mockApi';
import errorMessages from '../../config/errorMessages';
import { AxiosError } from 'axios';

interface Transaction {
  transactionId: string;
  accountId: string;
  date: string;
  description: string;
  amount: string;
  balance: string;
  type: string;
  category: string;
  notes: string;
  merchant: string;
  location: string;
  status: string;
  currency: string;
  paymentMethod: string;
}

const updateTransactionThunk = createAsyncThunk(
    'transaction/updateTransaction',
    async (
      {
        accountId,
        transactionId,
        updates,
      }: {
        accountId: string;
        transactionId: string;
        updates: { category?: string; notes?: string; description?: string };
      },
      { rejectWithValue }
    ) => {
      try {
        const response = (await updateTransaction(
          accountId,
          transactionId,
          updates
        )) as {
          data: { body: Transaction };
        };
        return response.data.body;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.data
        ) {
          const status = error.response.status;
          let errorMessage = errorMessages.UPDATE_TRANSACTION_FAILED;
          if (status === 401) {
            errorMessage = errorMessages.UNAUTHORIZED;
          } else if (status === 404) {
            errorMessage = errorMessages.NOT_FOUND;
          }
          return rejectWithValue(errorMessage);
        }
        return rejectWithValue(errorMessages.UPDATE_TRANSACTION_FAILED);
      }
    }
  );

  export default updateTransactionThunk