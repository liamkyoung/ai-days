import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserState, WorkSpace } from '../../lib/types'

const initialState: UserState = {
  id: -1,
  email: '',
  workspaceIds: [],
  currWorkspace: {
    id: -1,
    created: new Date(),
    data: {},
    trained: false,
    predicted: false,
    visualized: false,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    resetUser: (state) => {
      state = initialState
    },
    setCurrWorkspace: (state, action: PayloadAction<WorkSpace>) => {
      state.currWorkspace = action.payload
    },
    setAllWorkspaces: (state, action: PayloadAction<number[]>) => {
      state.workspaceIds = action.payload
      // Set Current Workspace to Id. Must search through DB
      // state.currWorkspace = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setUser,
  setUserEmail,
  resetUser,
  setCurrWorkspace,
  setAllWorkspaces,
} = userSlice.actions

export default userSlice.reducer
