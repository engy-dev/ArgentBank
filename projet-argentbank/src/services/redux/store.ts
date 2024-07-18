import { createStore } from "redux";
import userReducer from "./reducers";

const store = createStore(userReducer)

export default store



/* import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './reducers';
import profileReducer from './initialstate';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const store = configureStore({
    reducer:{
        login: loginReducer,
        profile: profileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; */