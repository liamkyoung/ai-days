import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UIState {
  currWS_ID: number
  currWS_Step: number
  // currWS_Data: custom type
  // currWS_step
  //
}

const initialState: UIState = {
  currWS_ID: -1,
  currWS_Step: 1,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.currWS_Step += 1
    },
    decrementStep: (state) => {
      state.currWS_Step -= 1
    },
    setCurrWS_ID: (state, action: PayloadAction<number>) => {
      state.currWS_ID = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementStep, decrementStep } = uiSlice.actions

export default uiSlice.reducer
