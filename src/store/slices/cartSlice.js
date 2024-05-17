

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'products',
	initialState: {
		items: [],
		total: 0
	},
	reducers: {
		addItem(state, { payload }) {
			const hasInCart = state.items.find(el => el.id === payload.id)
			if (hasInCart) {
				hasInCart.count += 1
			} else {
				const newItem = {
					...payload,
					count: 1,
				}

				state.items.push(newItem)
			}
		},
		removeItem(state, { payload }) {
			state.items = state.items.filter(item => item.id !== payload.id)
		},
		calculateTotal(state) {
			state.total = state.items.reduce((prev, next) => {
				return prev + next.price * next.count
			}, 0)
		}
	},
})

export const { addItem, removeItem, calculateTotal } = cartSlice.actions

export const cartReducer = cartSlice.reducer
