/* eslint-disable indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import ApiAviasales from '../../services/service'

export const fetchTickets = createAsyncThunk('posts/fetchTickets', async () => {
  const api = new ApiAviasales()
  const response = await api.getSearchId()
  const { searchId } = response
  let allTickets = []
  let continueSearching = false
  do {
    // eslint-disable-next-line no-await-in-loop
    const getTicketsResponse = await api.getTickets(searchId)
    const { status, stop, tickets } = getTicketsResponse
    switch (status) {
      case 'err':
        break
      case '500':
        break
      default:
        allTickets = allTickets.concat(tickets)
        continueSearching = stop
    }
  } while (!continueSearching)
  return allTickets
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    //  | 'loading' | 'succeeded' | 'failed',
    status: 'idle',
    error: null,
    tickets: [],
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.tickets = action.payload
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
  selectors: {
    selectTickets: (state) => state.tickets,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
  },
})

export const { selectTickets, selectStatus, selectError } = ticketsSlice.selectors
export default ticketsSlice.reducer
