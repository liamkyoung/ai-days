import React, { useEffect, useState } from 'react'
import WorkspaceTab from '../small/WorkspaceTab'
import WorkspaceSetup from '../medium/WorkspaceSetup'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import WorkspaceHome from '../medium/WorkspaceHome'
import WorkspaceActive from '../medium/WorkspaceActive'
import WorkspaceWait from '../medium/WorkspaceWait'
import { getSession, SessionContextValue } from 'next-auth/react'
import { WorkSpaceTab, WorkSpace } from '../../lib/constants'
import { setAllWorkspaces } from '../../redux/slices/userSlice'
import { Session } from 'next-auth'

type Props = {}

function Workspace({}: Props) {
  const workspaceId = useSelector((state: RootState) => state.ui.currWS_ID)
  const workspaceStep = useSelector((state: RootState) => state.ui.currWS_Step)
  const [workspaces, setWorkspaces] = useState<WorkSpaceTab[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    getSession().then((s) => {
      if (s?.user?.email === undefined || workspaces.length > 0) return

      fetch('/api/users/workspaces?email=' + s?.user?.email)
        .then((response) => response.json())
        .then((d) => {
          const { data } = d
          const userTabs: WorkSpaceTab[] = []
          const userWorkspaces: WorkSpace[] = []
          data.map((project: any, i: number) => {
            const { projectData: pData } = project
            userTabs.push({ id: i + 1, text: pData.name })
            userWorkspaces.push({ data: pData, id: i + 1 })
          })

          // Sort Tabs by increasing
          // Add Home and + icons
          userTabs.sort((a, b) => b.id - a.id)
          userTabs.unshift({ id: -1, text: 'Home' })
          userTabs.push({ id: 0, text: '+' })

          // Update State / Redux
          setWorkspaces(userTabs)
          dispatch(setAllWorkspaces(userWorkspaces))
        })
        .catch((response) => {
          console.log('Error: ', response.json())
        })
    })
  })

  return (
    <div className="mx-10 my-24 -mb-24 height-75 bg-neutral rounded-md shadow-xl">
      {/* Tabs */}
      <div className="btn-group -translate-y-16 ml-5">
        {workspaces.map((ws, i) => (
          <WorkspaceTab
            key={i}
            id={ws.id}
            text={ws.text}
            active={ws.id === workspaceId ? true : false}
          />
        ))}
      </div>

      {/* Body */}
      {workspaceId === -2 ? <WorkspaceWait /> : null}
      {workspaceId === -1 ? <WorkspaceHome /> : null}
      {workspaceId === 0 && workspaceStep >= 0 ? (
        <WorkspaceSetup step={workspaceStep} />
      ) : null}
      {workspaceId > 0 ? <WorkspaceActive /> : null}
    </div>
  )
}

export default Workspace
