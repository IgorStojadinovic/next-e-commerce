import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  cart: []
  quantity: number
}

export interface ActionTypes {
  payload: {
    name: string
    total: number
    defaultPrice: number
    quantity: number
    itemKey: string
  }
  type: string
}

const initialState: CounterState = {
  cart: [],
  quantity: 0,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.quantity += 1
    },
    decrement: (state) => {
      if (state.quantity <= 0) {
        state.quantity = 0
      } else {
        state.quantity -= 1
      }
    },
    addItemToCart: (state, action) => {
      //Check if item exists in the cart
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === action.payload.name
      )

      //If item exists update total price and quantity of that item obj
      if (existingItemIndex !== -1) {
        console.log('That item already exists!')

        const updatedCart = [...state.cart]
        updatedCart[existingItemIndex] = {
          ...state.cart[existingItemIndex],
          total: state.cart[existingItemIndex].total + action.payload.total,
          quantity:
            state.cart[existingItemIndex].quantity + action.payload.quantity,
        }

        state.cart = updatedCart
        state.quantity = 0
      } else {
        state.cart.push(action.payload)
        state.quantity = 0
      }
    },
  },
})

export const { increment, decrement, addItemToCart } = cartSlice.actions
export const getValue = (state: CounterState) => state.quantity
export default cartSlice.reducer
