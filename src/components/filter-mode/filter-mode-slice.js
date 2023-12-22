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
})

export const selectMode = (state) => state.mode.mode

export const { switchMode } = modeSlice.actions
export default modeSlice.reducer
