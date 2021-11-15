import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItemsToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name);
            state.totalQuantity++;
            state.totalPrice += newItem.price;

            if (!existingItem) {
                state.items.push({
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemsFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name)

            if (existingItem && state.totalQuantity !== 0) {
                state.totalQuantity--
            }
            if (existingItem && state.totalPrice !== 0) {
                state.totalPrice -= newItem.price
            }

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items = state.items.filter(item => item.name !== existingItem.name)
                }
                if (existingItem.totalPrice !== 0) {
                    existingItem.totalPrice = existingItem.totalPrice - newItem.price;
                }
            }
        },
        emptyOutCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;