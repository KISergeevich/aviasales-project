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
  },
  reducers: {
    midleResultOfTickets(state, action) {
      return {
        ...state,
        allTickets: action.payload,
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
    selectTickets: (state) => state.allTickets,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
  },
})

export const { midleResultOfTickets } = ticketsSlice.actions
export const { selectTickets, selectStatus, selectError } = ticketsSlice.selectors
export default ticketsSlice.reducer
