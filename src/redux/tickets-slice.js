/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import fetchTickets from './fetch-tickets-thunk'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    //  | 'loading' | 'succeeded' | 'failed',
    status: 'idle',
    error: null,
    allTickets: [],
    countTickets: 5,
  },
  reducers: {
    midleResultOfTickets(state, action) {
      return {
        ...state,
        allTickets: action.payload,
      }
    },
    handleMoreTickets(state) {
      return {
        ...state,
        countTickets: state.countTickets + 5,
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
    selectCount: (state) => state.countTickets,
  },
})

export const { midleResultOfTickets, handleMoreTickets } = ticketsSlice.actions
export const { selectTickets, selectStatus, selectError, selectCount } = ticketsSlice.selectors
export default ticketsSlice.reducer
