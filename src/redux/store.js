import { configureStore } from '@reduxjs/toolkit'

import transferReducer from '../components/number-transfers-filter/filters-transfer-slice'

const store = configureStore({
  reducer: { transfers: transferReducer },
})

export default store
