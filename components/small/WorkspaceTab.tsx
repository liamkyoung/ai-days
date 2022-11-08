import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrWS_ID } from '../../redux/slices/uiSlice'
import type { WorkSpace } from '../../lib/constants'

type Props = {
  id: number
  text: string
  active: boolean
}

function WorkspaceTab({ id, text, active }: Props) {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => {
        dispatch(setCurrWS_ID(id))
      }}
      className={`btn btn-lg ${active ? 'btn-active' : ''}`}
    >
      {text}
    </button>
  )
}

export default WorkspaceTab
