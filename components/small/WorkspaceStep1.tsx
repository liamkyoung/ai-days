import React, { useState } from 'react'
import FileUploader from '../utility/FileUploader'
import { setCurrWS_ID } from '../../redux/slices/uiSlice'
import {
  incrementStep,
  AI_DATA,
  setGeneralData,
} from '../../redux/slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import WorkspaceContainer from '../medium/WorkspaceContainer'
import { RootState } from '../../redux/store'
import { defaultData } from '../../lib/constants'

type Props = {}

function WorkspaceStep1({}: Props) {
  const dispatch = useDispatch()
  const generalData = useSelector((state: RootState) => state.ui.ai_data)

  const NameInput = (
    <input
      className="rounded-md text-black p-3 w-xs"
      onChange={(e) => {
        dispatch(setGeneralData({ ...generalData, name: e.target.value }))
      }}
      value={generalData?.name}
    ></input>
  )

  const DescriptionInput = (
    <input
      className="rounded-md text-black p-3 w-xs"
      onChange={(e) => {
        dispatch(
          setGeneralData({ ...generalData, description: e.target.value })
        )
      }}
      value={generalData?.description}
    ></input>
  )

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="wsStepTitle -mt-24">Project Information</div>
      </div>
      <div className="justify-between items-center">
        <div className="flex flex-col items-center wsContainer mb-5">
          <div>
            <h1 className="text-2xl font-bold underline mb-5 mr-5">Name</h1>
            <div className="flex space-x-2 items-center"></div>
          </div>
          {NameInput}
        </div>

        <div className="flex flex-col items-center wsContainer">
          <div>
            <h1 className="text-2xl font-bold underline mb-5 mr-5">
              Description
            </h1>
            <div className="flex space-x-2 items-center"></div>
          </div>
          {DescriptionInput}
        </div>
      </div>

      <div className="wsContainer mb-5">
        <h1 className="text-2xl font-bold underline mb-5 text-center">
          Upload A Dataset
        </h1>
        <FileUploader />
      </div>

      <div className="flex justify-between mx-24 py-16 -mt-16">
        <button
          className="btn btn-error btn-lg"
          onClick={() => {
            dispatch(setCurrWS_ID(-1))
          }}
        >
          Exit
        </button>
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            dispatch(incrementStep())
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default WorkspaceStep1
