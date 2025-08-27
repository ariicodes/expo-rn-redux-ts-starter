import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'items';
export const saveItems = (items: unknown) =>
	AsyncStorage.setItem(KEY, JSON.stringify(items));
export const loadItems = async <T>() => {
	const raw = await AsyncStorage.getItem(KEY);
	return raw ? (JSON.parse(raw) as T) : null;
};
