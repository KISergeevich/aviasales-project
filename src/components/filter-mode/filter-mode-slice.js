import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: 'cheap',
  },
  reducers: {
    switchMode: (state, action) => ({
      ...state,
      value: action.payload,
    }),
  },
  selectors: {
    selectMode: (state) => state.value,
  },
})

export const { switchMode } = modeSlice.actions
export const { selectMode } = modeSlice.selectors
export default modeSlice.reducer
