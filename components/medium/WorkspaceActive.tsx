import React, { useState } from 'react'
import {
  decrementStep,
  incrementStep,
  setGeneralData,
  setStep,
  AI_DATA,
} from '../../redux/slices/uiSlice'
import {
  setCurrWorkspace,
  setCurrWorkspaceId,
} from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import Results from '../medium/Results'
import { defaultData, WorkSpace } from '../../lib/constants'

type Props = {}

function WorkspaceActive({}: Props) {
  const dispatch = useDispatch()
  const [toggleResults, setResults] = useState(true)
  const currId = useSelector((state: RootState) => state.ui.currWS_ID)
  const allData: WorkSpace[] = useSelector(
    (state: RootState) => state.user.workspaces
  )

  const workspace: WorkSpace = allData.find((ws) => ws.id === currId) || {
    id: -2,
    data: defaultData,
  }

  const left = (
    <div className="text-2xl text-white ml-10 border-2 border-white bg-slate-800 p-10 rounded-md">
      <div className="font-bold space-y-16">
        <h1>&quot;{workspace?.data.name}&quot;</h1>
        <h1>Created On: {new Date().toDateString()}</h1>
        <h1>Description: {workspace?.data.description}</h1>
        <h1>Data Type: Categorical</h1>
      </div>
      <div className="flex flex-col justify-end h-96">
        <h1 className="text-center mb-5 font-bold">Actions</h1>
        <button className="btn btn-lg btn-success mb-10">
          <ArrowDownTrayIcon className="h-8" />
          Predict Using Model
        </button>
        <button className="btn btn-lg btn-info">
          <ArrowUpTrayIcon className="h-8" />
          Download Model
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex justify-between">
      {left}
      <Results data={workspace?.data} />
    </div>
  )
}

export default WorkspaceActive
