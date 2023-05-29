import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    cartList: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            let ExistProduct = state.cartList.find((value) => value.id === action.payload.id)
            if (!ExistProduct) {
                state.cartList.push({ ...action.payload, count: 1 })
            }
        },
        increament: (state, action) => {
            let ExistProduct = state.cartList.find((value) => value.id === action.payload)
            if (ExistProduct) {
                ExistProduct.count += 1
            }
        },
        decreament: (state, action) => {
            let ExistProduct = state.cartList.find((value) => value.id === action.payload)
            if (ExistProduct) {
                if (ExistProduct.count === 1) {
                    console.log('count is 0');
                    state.cartList = state.cartList.filter((value) => value.id !== action.payload)
                } else {
                    ExistProduct.count -= 1
                }
            }
        },
    },
})

export const { increament, decreament, addToCart } = cartSlice.actions

export default cartSlice.reducer