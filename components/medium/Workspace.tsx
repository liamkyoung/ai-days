import React from 'react'
import HeaderLoggedIn from '../utility/HeaderLoggedIn'
import WorkspaceTab from '../small/WorkspaceTab'
import WorkspaceSetup from '../medium/WorkspaceSetup'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import WorkspaceHome from './WorkspaceHome'
import WorkspaceActive from './WorkspaceActive'

type Props = {}

function Workspace({}: Props) {
  const workspaceValue = useSelector(
    (state: RootState) => state.user.currWorkspace
  )
  const workspaceStep = useSelector((state: RootState) => state.ui.currWS_Step)

  const allWS = [
    { id: -1, text: 'Home' },
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 0, text: '+' },
  ]
  return (
    <div className="mx-10 my-24 -mb-24 height-75 bg-neutral rounded-md">
      {/* Tabs */}
      <div className="btn-group -translate-y-12 ml-5">
        {allWS.map((ws, i) => (
          <WorkspaceTab
            key={i}
            id={ws.id}
            text={ws.text}
            active={ws.id === workspaceValue.id ? true : false}
          />
        ))}
      </div>

      {/* Body */}
      {workspaceValue.id === -1 ? <WorkspaceHome /> : null}
      {workspaceValue.id === 0 && workspaceStep >= 0 ? (
        <WorkspaceSetup step={workspaceStep} />
      ) : null}
      {workspaceValue.id > 0 ? <WorkspaceActive /> : null}
    </div>
  )
}

export default Workspace
