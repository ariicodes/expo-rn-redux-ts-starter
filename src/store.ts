import { configureStore } from '@reduxjs/toolkit';
import items from './slices/itemsSlice';

export const store = configureStore({ reducer: { items } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
