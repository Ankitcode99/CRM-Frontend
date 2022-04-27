import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    tickets: [],
    isLoading: false,
    error: ``,
    searchTicketList: [],
}

const ticketSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading:(state,action) => {
            state.isLoading = true
        },
        fetchTicketSuccess:(state,action) => {
            state.isLoading = false
            state.tickets = action.payload
            state.searchTicketList = action.payload
        },
        fetchTicketFail:(state,action) => {
            state.isLoading = false
            state.error = action.payload
        },
        searchTickets: (state,{payload}) => {
            state.searchTicketList = state.tickets.filter(row=>{
                if(!payload){
                    return row
                }else{
                    return row.subject.toLowerCase().includes(payload.toLowerCase());
                }
            })
        }
    }
})

const { reducer, actions } = ticketSlice

export const {fetchTicketFail, fetchTicketLoading, fetchTicketSuccess, searchTickets} = actions

export default reducer