import { createSlice } from "@reduxjs/toolkit";

const cartContent = createSlice({
    name: 'cartContent',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        overAllPrice: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    img: newItem.img,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.totalPrice,
                    name: newItem.name
                })
                state.overAllPrice = state.overAllPrice + newItem.totalPrice
                
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
                state.overAllPrice = state.overAllPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            state.totalQuantity--
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
                state.overAllPrice = state.overAllPrice - existingItem.price
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                state.overAllPrice = state.overAllPrice - existingItem.price
            }
        },
        addQuantity(state, action) {
            const id = action.payload
            state.totalQuantity++
            const existingItem = state.items.find(item => item.id === id)
                existingItem.quantity++
        }
    }
})

export const { addItemToCart, addQuantity, removeItemFromCart } = cartContent.actions
export default cartContent.reducer