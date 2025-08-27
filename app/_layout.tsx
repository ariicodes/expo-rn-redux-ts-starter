import { Slot } from 'expo-router';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from '../src/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { View } from 'react-native';
import { loadItems, saveItems } from '../src/lib/storage';
import { setAll } from '../src/slices/itemsSlice';
import type { Item } from '../src/slices/itemsSlice';

// Simple persistence bridge (learnable, replace with redux-persist if desired)
function PersistBridge() {
	const items = useSelector((s: RootState) => s.items.data);
	useEffect(() => {
		loadItems<Item[]>().then(
			cached => cached && store.dispatch(setAll(cached))
		);
	}, []);
	useEffect(() => {
		saveItems(items);
	}, [items]);
	return null;
}

export default function RootLayout() {
	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<PersistBridge />
				<View style={{ flex: 1 }}>
					<Slot />
				</View>
			</SafeAreaView>
		</Provider>
	);
}
