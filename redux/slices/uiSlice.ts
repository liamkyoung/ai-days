import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PutBucketAnalyticsConfigurationCommand } from '@aws-sdk/client-s3'
import d from '../../data/d.json'

export interface UIState {
  currWS_ID: number
  currWS_Step: number
  currUploadFile: string
  ai_data: AI_DATA
  copy_data: AI_DATA[]
}

export type AI_DATA = {
  name: string
  description: string
  file: string
  datatype: string
  formatedCorrectly: string
  imageData: boolean
  data: Object[]
  predOrCluster: boolean
  generativeModel: boolean
  advancedOptions: Object
}

const initialState: UIState = {
  currWS_ID: -1,
  currWS_Step: 1,
  currUploadFile: '',
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
  copy_data: [
    {
      name: 'First Project',
      description: 'This is my first project testing diabetes',
      file: '',
      datatype: 'Classification',
      formatedCorrectly: 'columns',
      imageData: false,
      predOrCluster: false,
      generativeModel: false,
      advancedOptions: {},
    },
    {
      name: '',
      description: '',
      file: '',
      datatype: '',
      formatedCorrectly: '',
      imageData: false,
      predOrCluster: false,
      generativeModel: false,
      advancedOptions: {},
    },
  ],
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
} = uiSlice.actions

export default uiSlice.reducer
