import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CounterState } from "@/lib/types";
import { getLocalStore } from "next-persist";

const initialState: CounterState = {
  cart: [],
  quantity: 0,
  isOpen: false,
  cartIsOpen: false,
};

const persistedState = getLocalStore("cart", initialState);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;

      console.log("persist", persistedState);
    },
    decrement: (state) => {
      state.quantity = Math.max(0, state.quantity - 1);
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === action.payload.name
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...state.cart[existingItemIndex],
          total: state.cart[existingItemIndex].total + action.payload.total,
          quantity:
            state.cart[existingItemIndex].quantity + action.payload.quantity,
        };

        state.cart = updatedCart;
        state.quantity = 0;
      } else {
        state.cart.push(action.payload);
        state.quantity = 0;
      }
    },
    addQuantity: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === action.payload.name
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...state.cart[existingItemIndex],
          quantity: state.cart[existingItemIndex].quantity + 1,
          total:
            state.cart[existingItemIndex].total + action.payload.defaultPrice,
        };
        state.cart = updatedCart;
        state.quantity = 0;
      }
    },
    removeQuantity: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === action.payload.name
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...state.cart[existingItemIndex],
          quantity: state.cart[existingItemIndex].quantity - 1,
          total:
            state.cart[existingItemIndex].total - action.payload.defaultPrice,
        };
        state.cart = updatedCart.filter((item) => item.quantity > 0);
        state.quantity = 0;
      }
    },
    removeAll: (state) => {
      state.cart = [];
    },
  },
});

export const {
  increment,
  decrement,
  addItemToCart,
  addQuantity,
  removeQuantity,
  removeAll,
} = cartSlice.actions;
export const getValue = (state: CounterState) => state.quantity;
export const getMenuStatus = (state: CounterState) => state.isOpen;
export const getCartStatus = (state: CounterState) => state.cartIsOpen;
export default cartSlice.reducer;
