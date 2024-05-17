import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const loadDetailProducts = createAsyncThunk(
	'detailInfo/loadDetailProducts',
	async id => {
		return await axios.get(`/mebel/${id}`)
	}
)

const detailSlice = createSlice({
	name: 'detailInfo',
	initialState: {
		detailProducts: null,
		isLoading: false,
		error: '',
	},
	extraReducers: builder => {
		builder.addCase(loadDetailProducts.pending, state => {
			state.isLoading = true
		})
		builder.addCase(loadDetailProducts.fulfilled, (state, action) => {
			state.isLoading = false
			state.detailProducts = action.payload.data // Обновляем detailProducts, а не productsData
		})
		builder.addCase(loadDetailProducts.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error
		})
	},
})

export default detailSlice.reducer
