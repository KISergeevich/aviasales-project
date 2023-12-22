import { combineSlices, configureStore } from '@reduxjs/toolkit'

import transferSlice from '../components/number-transfers-filter/filters-transfer-slice'
import modeSlice from '../components/filter-mode/filter-mode-slice'

const filtersReducer = combineSlices({
  transfer: transferSlice,
  mode: modeSlice,
})

const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
})

export default store
