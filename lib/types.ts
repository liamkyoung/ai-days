export interface UserState {
  id: number
  email: string
  workspaceIds: number[]
  currWorkspace: WorkSpace
}

// User : Workspace ID

// Bucket Name for Workspace ID (0): user@gmail.com:Train-0
// Bucket Name for Workspace ID (0): user@gmail.com:Predict-0
// Bucket Name for Workspace ID (0): user@gmail.com:Visuals-0

export interface WorkSpace {
  id: number
  created: Date
  data: Object
  trained: boolean
  predicted: boolean
  visualized: boolean
}
