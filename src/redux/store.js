import { configureStore } from '@reduxjs/toolkit'

import transferReducer from '../components/number-transfers-filter/filters-transfer-slice'
import modeReducer from '../components/filter-mode/filter-mode-slice'

const store = configureStore({
  reducer: {
    transfers: transferReducer,
    mode: modeReducer,
  },
})

export default store
