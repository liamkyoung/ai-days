import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserState, WorkSpace, AI_DATA } from '../../lib/constants'

const initialState: UserState = {
  id: -1,
  email: '',
  workspaces: [],
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
    setCurrWorkspaceId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    setAllWorkspaces: (state, action: PayloadAction<WorkSpace[]>) => {
      state.workspaces = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setUser,
  setUserEmail,
  resetUser,
  setCurrWorkspaceId,
  setAllWorkspaces,
} = userSlice.actions

export default userSlice.reducer
