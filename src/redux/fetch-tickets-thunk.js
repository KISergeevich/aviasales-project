import { createAsyncThunk } from '@reduxjs/toolkit'

import ApiAviasales from '../services/service'

const fetchTickets = createAsyncThunk('posts/fetchTickets', async (_, { dispatch }) => {
  const api = new ApiAviasales()
  const response = await api.getSearchId()
  const { searchId } = response
  let allTickets = []
  let continueSearching = false
  do {
    const getTicketsResponse = await api.getTickets(searchId)
    const { status, stop, tickets } = getTicketsResponse
    switch (status) {
      case 'err':
        break
      case '500':
        break
      default:
        allTickets = allTickets.concat(tickets)
        dispatch({ type: 'tickets/midleResultOfTickets', payload: allTickets })
        continueSearching = stop
    }
  } while (!continueSearching)
  return allTickets
})

export default fetchTickets
