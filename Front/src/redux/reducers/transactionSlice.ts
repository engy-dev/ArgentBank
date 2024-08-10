import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransactionThunk,
  fetchTransactionsThunk,
  fetchTransactionByIdThunk,
  updateTransactionThunk
} from '../actions';

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

interface TransactionState {
  transactions: Transaction[];
  transaction: Transaction | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  transaction: null,
  status: 'idle',
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchTransactionByIdThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactionByIdThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transaction = action.payload;
      })
      .addCase(fetchTransactionByIdThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(updateTransactionThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTransactionThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedTransaction = action.payload;
        const index = state.transactions.findIndex(
          (trans) => trans.transactionId === updatedTransaction.transactionId
        );
        if (index !== -1) {
          state.transactions[index] = updatedTransaction;
        }
      })
      .addCase(updateTransactionThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transactions = state.transactions.filter(
          (transaction) => transaction.transactionId !== action.payload
        );
      })
      .addCase(deleteTransactionThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default transactionSlice.reducer;
