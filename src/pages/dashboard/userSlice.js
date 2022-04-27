import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    error: ``
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserPending: (state) => {
            state.isLoading = true
        },
        getUserSuccess: (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.error = ``
        },
        getUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
});

const {reducer, actions} = userSlice;

export const {getUserPending, getUserSuccess, getUserFailure} = actions;

export default reducer;