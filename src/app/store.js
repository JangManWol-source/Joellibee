import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartCounterReducer from '../features/cartCounter/cartCounter';
import addReducer from '../features/cartCounter/createSlice'
import uiReducer from '../features/cartCounter/uiCart';
import cartReducer from '../features/cartContent/cartContent'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartCounter: cartCounterReducer,
    cart: addReducer,
    cartTest: cartCounterReducer,
    ui: uiReducer,
    cartContentReducer: cartReducer,

  },
});
