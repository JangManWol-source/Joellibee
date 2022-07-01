import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: 'add',
    initialState: [{
            id: '',
            img: '',
            name: '',
            price: 0,
            quantity: 0
    }],
    reducers: {
        addToCart: (state, action) => {
            const newCart = {
                id: action.payload.id,
                img: action.payload.img,
                name: action.payload.name,
                price: action.payload.price,
                quantity: 0  
            }
            state.concat(newCart)
        }
    }
})

export const {addToCart} = addSlice.actions
export default addSlice.reducer