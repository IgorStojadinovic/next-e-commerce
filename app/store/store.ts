import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,


    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const getCartState = (state: RootState) => state.cart;