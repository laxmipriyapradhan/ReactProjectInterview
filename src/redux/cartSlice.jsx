import { createSlice } from "@reduxjs/toolkit";

const  cartSlice = createSlice({
    name: "cart",
    initialState:  [],
    reducers: {
        addToCart(state, action) {
            const prodcut = action.payload;
             const existing  = state.find(item => item.id === prodcut.id);
             if (existing) {
                existing.quantity += prodcut.quantity || 1;
        } else {
                state.push({
                    ...prodcut,
                    quantity: prodcut.quantity || 1,
                });
             }
        },
        removeFromCart(state, action) {
             return state.filter(item => item.id !== action.payload);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const  item  = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;