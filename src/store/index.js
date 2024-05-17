

import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlices'
import { cartReducer } from './slices/cartSlice'
import detailSlice from './slices/detailSlice'
import { FavoReducer } from './slices/favoritesSlice'

const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsSlice,
		productsDetail: detailSlice,
		favorites:FavoReducer,
	},
})

export default store
