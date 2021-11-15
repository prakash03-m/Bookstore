import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        idToken: ''
    },
    reducers: {
        userLogin(state, action) {
            const tokenData = action.payload;
            state.email = tokenData.email;
            state.idToken = tokenData.token;
        },
        userLogout(state) {
            state.idToken = ''
            state.email = ''
        }
    }
})

export const loginActions = loginSlice.actions;

export default loginSlice;