import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartState} from "@/lib/types";


const initialState: CartState = {
    cart: [],
    quantity: 0,
    isOpen: false,
    cartIsOpen: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            return {
                ...state,
                quantity: state.quantity + 1,
            };
        },
        decrement: (state) => {
            return {
                ...state,
                quantity: Math.max(0, state.quantity - 1),
            };
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
        toggleCart: (state) => {
            return {
                ...state,
                cartIsOpen: !state.cartIsOpen,
            };
        },
        toggleMenu: (state) => {
            return {
                ...state,
                isOpen: !state.isOpen,
            };
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
    toggleMenu,
    toggleCart,
} = cartSlice.actions;
export const getValue = (state: CartState) => state.quantity;
export const isOpen = (state: CartState) => state.isOpen;
export default cartSlice.reducer;
