import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    current: {},
    isLoggedIn: false,
    tokenRegister: ""
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register(state, action: PayloadAction<string>){
            state.tokenRegister = action.payload
        },
        login(state, action){

        },
        logout(state, action){

        },
        removeTokenRegister(state){
            state.tokenRegister = ""
        }
    }
})
const authReducer = authSlice.reducer
export const {register, login, logout, removeTokenRegister} = authSlice.actions
export default authReducer
