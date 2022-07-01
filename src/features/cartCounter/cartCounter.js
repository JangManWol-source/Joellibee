import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCount: 0,
  item: null,
  cartTest: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, action) =>{
      const newItem = {
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity  
      }
      
      return{
       ...state.item, newItem
      }
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartCount += 1
    },
    decrement: (state) => {
      state.cartCount -= 1
    },
    incrementByAmount: (state, action) => {
      state.cartCount += action.payload
    },
    testIncrement: (state) => {
      state.cartTest += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { testIncrement ,addItem, increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer