import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'cheap',
  },
  reducers: {
    switchMode: (state, action) => ({
      ...state,
      mode: action.payload,
    }),
  },
  selectors: {
    selectMode: (state) => state.mode,
  },
})

export const { switchMode } = modeSlice.actions
export const { selectMode } = modeSlice.selectors
export default modeSlice
