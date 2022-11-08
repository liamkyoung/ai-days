export interface UserState {
  id: number
  email: string
  workspaces: WorkSpace[]
}

// User : Workspace ID

// Bucket Name for Workspace ID (0): user@gmail.com:Train-0
// Bucket Name for Workspace ID (0): user@gmail.com:Predict-0
// Bucket Name for Workspace ID (0): user@gmail.com:Visuals-0

export interface WorkSpace {
  id: number
  data: AI_DATA
}

export interface UIState {
  currWS_ID: number
  currWS_Step: number
  currUploadFile: string
  currPage: string
  ai_data: AI_DATA
}

export type AI_DATA = {
  name: string
  description: string
  file: string
  datatype: string
  format: string
  imageData: boolean
  data: Object[]
  predOrCluster: boolean
  generativeModel: boolean
  advancedOptions: Object
}

export type WorkSpaceTab = {
  id: number
  text: string
}

export const defaultData: AI_DATA = {
  name: '',
  description: '',
  file: '',
  datatype: 'numerical',
  format: 'columns',
  data: [],
  imageData: false,
  predOrCluster: false,
  generativeModel: false,
  advancedOptions: {},
}
