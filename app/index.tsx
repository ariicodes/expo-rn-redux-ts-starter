import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../src/store';
import { addItem, removeItem } from '../src/slices/itemsSlice';
import {
	View,
	Text,
	TextInput,
	Button,
	FlatList,
	Pressable,
} from 'react-native';
import { s } from '../src/ui/styles';

export default function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const items = useSelector((s: RootState) => s.items.data);
	const [text, setText] = useState('');

	const submit = () => {
		const title = text.trim();
		if (!title) return;
		dispatch(addItem(title));
		setText('');
	};

	return (
		<View style={s.screen}>
			<Text style={[s.title, { marginBottom: 12 }]}>Starter List</Text>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					gap: 8,
					marginBottom: 16,
				}}
			>
				<TextInput
					value={text}
					onChangeText={setText}
					placeholder='Add item...'
					style={[s.input, { flex: 1 }]}
					onSubmitEditing={submit}
					returnKeyType='done'
				/>
				<Button title='Add' onPress={submit} />
			</View>

			<FlatList
				data={items}
				keyExtractor={it => it.id}
				ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
				renderItem={({ item }) => (
					<View style={s.card}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text style={s.text}>{item.title}</Text>
							<Pressable onPress={() => dispatch(removeItem(item.id))}>
								<Text style={s.danger}>Delete</Text>
							</Pressable>
						</View>
						<Text style={s.sub}>
							{new Date(item.createdAt).toLocaleString()}
						</Text>
					</View>
				)}
				ListEmptyComponent={<Text style={s.sub}>No items yet</Text>}
			/>
		</View>
	);
}
