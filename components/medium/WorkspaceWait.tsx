import React from 'react'
import { useDispatch } from 'react-redux'
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
import { defaultData } from '../../lib/constants'

type Props = {}

function WorkspaceWait({}: Props) {
  const dispatch = useDispatch()
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold mb-8">
          Generating &quot;{'Project Name'}&quot;
        </h1>
        <h2 className="text-xl italic">Sit back and grab some coffee.</h2>
        <h2 className="text-xl italic">We&apos;ll be right back.</h2>
      </div>

      <div className="flex justify-center items-center border-white rounded-md border-2 bg-gray-800 w-3/4 h-96 mx-24">
        <div className="text-3xl flex flex-col justify-center items-center space-y-10">
          <button className="btn btn-lg loading text-3xl outline">
            loading
          </button>
        </div>
      </div>

      <div className="flex justify-between w-1/2 mx-24 mt-36">
        <button
          className="btn btn-error btn-lg"
          onClick={() => {
            dispatch(setStep(1))
            dispatch(setCurrWorkspaceId(-1))
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn-success btn-lg font-bold"
          onClick={() => {
            dispatch(setStep(1))
            dispatch(setCurrWorkspaceId(0))
            dispatch(setGeneralData(defaultData))
          }}
        >
          New Project
        </button>
      </div>
    </div>
  )
}

export default WorkspaceWait
