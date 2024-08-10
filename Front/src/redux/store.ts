import { configureStore } from '@reduxjs/toolkit';
import {
  accountReducer,
  authReducer,
  profileReducer,
  transactionReducer
} from './reducers';


const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
    account: accountReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
