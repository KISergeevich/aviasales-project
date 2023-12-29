/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import fetchTickets from './fetch-tickets.thunk'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    //  | 'loading' | 'succeeded' | 'failed',
    status: 'idle',
    error: null,
    allTickets: [],
    filteredTickets: [],
  },
  reducers: {
    midleResultOfTickets(state, action) {
      return {
        ...state,
        filteredTickets: action.payload,
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allTickets = action.payload
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
  selectors: {
    selectTickets: (state) => state.filteredTickets,
    selectFiveTickets: (state) => {
      const fiveTickets = state.filteredTickets.slice(0, 4)
      return fiveTickets
    },
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
  },
})

export const { midleResultOfTickets } = ticketsSlice.actions
export const { selectTickets, selectStatus, selectError, selectFiveTickets } = ticketsSlice.selectors
export default ticketsSlice.reducer
