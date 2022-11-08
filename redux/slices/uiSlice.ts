import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PutBucketAnalyticsConfigurationCommand } from '@aws-sdk/client-s3'
import d from '../../data/d.json'
import { AI_DATA } from '../../lib/constants'
import { UIState } from '../../lib/constants'

const initialState: UIState = {
  currWS_ID: -1,
  currWS_Step: 1,
  currUploadFile: '',
  currPage: 'Home',
  ai_data: {
    name: '',
    description: '',
    file: '',
    data: d,
    datatype: '',
    formatedCorrectly: '',
    imageData: false,
    predOrCluster: false,
    generativeModel: false,
    advancedOptions: {},
  },
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
    setStep: (state, action: PayloadAction<number>) => {
      state.currWS_Step = action.payload
    },
    setCurrWS_ID: (state, action: PayloadAction<number>) => {
      state.currWS_ID = action.payload
    },
    setGeneralData: (state, action: PayloadAction<AI_DATA>) => {
      state.ai_data = action.payload
    },
    setFileName: (state, action: PayloadAction<string>) => {
      state.currUploadFile = action.payload
    },
    setCurrPage: (state, action: PayloadAction<string>) => {
      state.currPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  incrementStep,
  decrementStep,
  setCurrWS_ID,
  setStep,
  setGeneralData,
  setFileName,
  setCurrPage,
} = uiSlice.actions

export default uiSlice.reducer
