import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrWorkspace } from '../../redux/slices/userSlice'
import type { WorkSpace } from '../../lib/types'

type Props = {
  id: number
  text: string
  active: boolean
}

function WorkspaceTab({ id, text, active }: Props) {
  const dispatch = useDispatch()
  const exWorkspace: WorkSpace = {
    id: id,
    created: new Date(),
    data: {},
    trained: false,
    predicted: false,
    visualized: false,
  }

  return (
    <button
      onClick={() => {
        dispatch(setCurrWorkspace(exWorkspace))
      }}
      className={`btn ${active ? 'btn-active' : ''}`}
    >
      {text}
    </button>
  )
}

export default WorkspaceTab
