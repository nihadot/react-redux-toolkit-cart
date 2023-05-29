import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import usersReducer from './usersReducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: usersReducer,
    }
})

