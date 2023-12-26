import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import ApiAviasales from '../../services/service'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    //  | 'loading' | 'succeeded' | 'failed',
    status: 'idle',
    error: null,
    tickets: [
      {
        // Цена в рублях
        price: 13400,
        // Код авиакомпании (iata)
        carrier: 'string',
        // Массив перелётов.
        // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
        segments: [
          {
            // Код города (iata)
            origin: 'string',
            // Код города (iata)
            destination: 'tumen',
            // Дата и время вылета туда
            date: '10:45',
            // Массив кодов (iata) городов с пересадками
            stops: ['ekb', 'spb'],
            // Общее время перелёта в минутах
            duration: 10000,
          },
          {
            // Код города (iata)
            origin: 'string',
            // Код города (iata)
            destination: 'nsk',
            // Дата и время вылета обратно
            date: '12:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['msc'],
            // Общее время перелёта в минутах
            duration: 50000,
          },
        ],
      },
      {
        // Цена в рублях
        price: 13400,
        // Код авиакомпании (iata)
        carrier: 'string',
        // Массив перелётов.
        // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
        segments: [
          {
            // Код города (iata)
            origin: 'string',
            // Код города (iata)
            destination: 'tumen',
            // Дата и время вылета туда
            date: '10:45',
            // Массив кодов (iata) городов с пересадками
            stops: ['ekb', 'spb'],
            // Общее время перелёта в минутах
            duration: 10000,
          },
          {
            // Код города (iata)
            origin: 'string',
            // Код города (iata)
            destination: 'nsk',
            // Дата и время вылета обратно
            date: '12:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['msc'],
            // Общее время перелёта в минутах
            duration: 50000,
          },
        ],
      },
    ],
  },
  reducers: {
    fetch: (state) => ({
      ...state,
    }),
  },
  selectors: {
    selectTickets: (state) => state.tickets,
    selectStatus: (state) => state.status,
  },
})

export const fetchSearchId = createAsyncThunk('posts/fetchPosts', async () => {
  const api = new ApiAviasales()
  const response = await api.getSearchId()
  return response.searchId
})

export const { fetch } = ticketsSlice.actions
export const { selectTickets, selectStatus } = ticketsSlice.selectors
export default ticketsSlice.reducer
