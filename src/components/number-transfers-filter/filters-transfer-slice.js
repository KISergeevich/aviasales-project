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
  selectors: {
    selectTransferNone: (state) => state.none,
    selectTransferOne: (state) => state.one,
    selectTransferTwo: (state) => state.two,
    selectTransferThree: (state) => state.three,
    selectTransferAll: (state) => {
      const { one, two, three, none } = state
      return one && two && three && none
    },
  },
})

export const { transferNone, transferOne, transferTwo, transferThree, transferAll } = transferSlice.actions
export const { selectTransferNone, selectTransferOne, selectTransferTwo, selectTransferThree, selectTransferAll } =
  transferSlice.selectors
export default transferSlice
