import { createSlice } from '@reduxjs/toolkit';
import { fetchAccountsThunk } from '../actions';

interface Account {
  userId: string;
  accountId: string;
  title: string;
  amount: string;
  description: string;
}

interface AccountState {
  accounts: Account[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const ACCOUNTS_STORAGE_KEY = 'accounts';
const ACCOUNTS_EXPIRATION_KEY = 'accounts_expiration';


const loadAccountsFromLocalStorage = (): Account[] => {
  try {
    const serializedAccounts = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    const expirationDate = localStorage.getItem(ACCOUNTS_EXPIRATION_KEY);

    if (serializedAccounts === null || expirationDate === null) {
      return [];
    }

    const now = new Date();
    if (now.getTime() > new Date(expirationDate).getTime()) {
      localStorage.removeItem(ACCOUNTS_STORAGE_KEY);
      localStorage.removeItem(ACCOUNTS_EXPIRATION_KEY);
      return [];
    }

    return JSON.parse(serializedAccounts);
  } catch (e) {
    console.warn('Could not load accounts from localStorage', e);
    return [];
  }
};


const saveAccountsToLocalStorage = (accounts: Account[]) => {
  try {
    const serializedAccounts = JSON.stringify(accounts);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1); // Set expiration to 1 day from now

    localStorage.setItem(ACCOUNTS_STORAGE_KEY, serializedAccounts);
    localStorage.setItem(ACCOUNTS_EXPIRATION_KEY, expirationDate.toISOString());
  } catch (e) {
    console.warn('Could not save accounts to localStorage', e);
  }
};

const initialState: AccountState = {
  accounts: loadAccountsFromLocalStorage(),
  status: 'idle',
  error: null,
};


const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
   
    clearAccounts(state) {
      state.accounts = [];
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem(ACCOUNTS_STORAGE_KEY);
      localStorage.removeItem(ACCOUNTS_EXPIRATION_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccountsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts = action.payload;
        saveAccountsToLocalStorage(state.accounts);
      })
      .addCase(fetchAccountsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { clearAccounts } = accountSlice.actions;

export default accountSlice.reducer;
