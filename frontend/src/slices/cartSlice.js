import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems:[]}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Get added item from payload
            const item = action.payload;

            // Check if item already in cart
            const existItem = state.cartItems.find((existingItem) => existingItem._id === item._id );

            if(existItem) {
                // If item already exists in cart, map all items and replace existing item with new item
                state.cartItems = state.cartItems.map( (x) => x._id === existItem._id ? item : x)
            } else {
                // If it doesent exist the add the item in the array
                state.cartItems = [...state.cartItems, item]
            }

            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x)=> x._id !== action.payload);

            return updateCart(state);
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;