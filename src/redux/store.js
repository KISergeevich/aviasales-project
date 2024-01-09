import { configureStore } from '@reduxjs/toolkit'

import transferReducer from './filters-transfer-slice'
import modeReducer from './filter-mode-slice'
import ticketsReducer from './tickets-slice'

const store = configureStore({
  reducer: {
    transfers: transferReducer,
    mode: modeReducer,
    tickets: ticketsReducer,
  },
})

export default store
