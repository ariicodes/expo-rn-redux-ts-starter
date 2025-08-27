import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Item = { id: string; title: string; createdAt: number };
type State = { data: Item[] };
const initial: State = { data: [] };

const slice = createSlice({
	name: 'items',
	initialState: initial,
	reducers: {
		addItem: {
			prepare(title: string) {
				return {
					payload: {
						id: String(Date.now()),
						title,
						createdAt: Date.now(),
					} as Item,
				};
			},
			reducer(state, action: PayloadAction<Item>) {
				state.data.unshift(action.payload);
			},
		},
		removeItem(state, action: PayloadAction<string>) {
			state.data = state.data.filter(x => x.id !== action.payload);
		},
		setAll(state, action: PayloadAction<Item[]>) {
			state.data = action.payload;
		},
	},
});

export const { addItem, removeItem, setAll } = slice.actions;
export default slice.reducer;
