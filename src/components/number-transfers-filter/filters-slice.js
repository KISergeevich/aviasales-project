import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    none: false,
    one: false,
    two: false,
    three: false,
  },
  reducers: {
    transferNone: (state, action) => ({
      ...state,
      none: action.payload,
    }),
    transferOne: (state, action) => ({
      ...state,
      one: action.payload,
    }),
    transferTwo: (state, action) => ({
      ...state,
      two: action.payload,
    }),
    transferThree: (state, action) => ({
      ...state,
      three: action.payload,
    }),
    transferAll: (state, action) => ({
      ...state,
      none: action.payload,
      one: action.payload,
      two: action.payload,
      three: action.payload,
    }),
  },
})

export const selectTransferNone = (state) => state.filters.none
export const selectTransferOne = (state) => state.filters.one
export const selectTransferTwo = (state) => state.filters.two
export const selectTransferThree = (state) => state.filters.three
export const selectTransferAll = (state) => {
  const { one, two, three, none } = state.filters
  return one && two && three && none
}

export const { transferNone, transferOne, transferTwo, transferThree, transferAll } = filtersSlice.actions

export default filtersSlice.reducer
