import { createSlice } from '@reduxjs/toolkit'

const transferSlice = createSlice({
  name: 'transfers',
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

export const selectTransferNone = (state) => state.transfers.none
export const selectTransferOne = (state) => state.transfers.one
export const selectTransferTwo = (state) => state.transfers.two
export const selectTransferThree = (state) => state.transfers.three
export const selectTransferAll = (state) => {
  const { one, two, three, none } = state.transfers
  return one && two && three && none
}

export const { transferNone, transferOne, transferTwo, transferThree, transferAll } = transferSlice.actions

export default transferSlice.reducer
