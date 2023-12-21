import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from '../components/number-transfers-filter/filters-slice'

const store = configureStore({
  reducer: { filters: filtersReducer },
})

export default store
