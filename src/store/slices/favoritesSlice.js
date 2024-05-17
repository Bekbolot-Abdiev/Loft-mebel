import { createSlice } from '@reduxjs/toolkit'

const FavoSlice = createSlice({
	name: 'products',
	initialState: {
		favoItems: [],
	},
	reducers: {
		addFavoItem(state, { payload }) {
			let hasIncart = state.favoItems.find(el => el.id === payload.id)
			if (hasIncart) {
				hasIncart.count += 1
			} else {
				const newItem = {
					...payload,
					count: 1,
				}

				state.favoItems.push(newItem)
			}
		},
		removeFavoItem(state, {payload}) {
			state.favoItems = state.favoItems.filter(item => item.id !== payload.id)
		},
	},
})

export const { addFavoItem, removeFavoItem } = FavoSlice.actions

export const FavoReducer = FavoSlice.reducer
