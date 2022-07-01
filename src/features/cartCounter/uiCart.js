import { createSlice } from '@reduxjs/toolkit'

const uiCart = createSlice({
    name: 'cartToggle',
    initialState: { drawerIsVisible: false, alertShow: false, success: false },
    reducers: {
        toggle(state){
            state.drawerIsVisible = !state.drawerIsVisible
        },
        toggleAlert(state){
            state.alertShow  = !state.alertShow
        },
        toggleSuccess(state){
            state.success = !state.success
        }
    }
})

export const {toggle, toggleSuccess, toggleAlert} = uiCart.actions
export default uiCart.reducer