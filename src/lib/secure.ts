import * as SecureStore from 'expo-secure-store';
// Example helpers for tokens/credentials
export const setToken = (t: string) => SecureStore.setItemAsync('token', t);
export const getToken = () => SecureStore.getItemAsync('token');
export const clearToken = () => SecureStore.deleteItemAsync('token');
