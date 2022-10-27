import React, { useState } from 'react'
import FileUploader from '../utility/FileUploader'
import { setCurrWorkspaceId } from '../../redux/slices/userSlice'
import {
  incrementStep,
  AI_DATA,
  setGeneralData,
} from '../../redux/slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import WorkspaceContainer from '../medium/WorkspaceContainer'
import { RootState } from '../../redux/store'

type Props = {}

function WorkspaceStep1({}: Props) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const generalData = useSelector((state: RootState) => state.ui.ai_data)
  const collectedData: AI_DATA = {
    name: name,
    description: description,
    file: '',
    datatype: '',
    formatedCorrectly: '',
    imageData: false,
    predOrCluster: false,
    generativeModel: false,
    advancedOptions: {},
  }

  const defaultData: AI_DATA = {
    name: '',
    description: '',
    file: '',
    datatype: '',
    formatedCorrectly: '',
    imageData: false,
    predOrCluster: false,
    generativeModel: false,
    advancedOptions: {},
  }

  const NameInput = (
    <input
      className="rounded-md text-black p-3 w-xs"
      onChange={(e) => setName(e.target.value)}
      value={name}
    ></input>
  )

  const DescriptionInput = (
    <input
      className="rounded-md text-black p-3 w-xs"
      onChange={(e) => setDescription(e.target.value)}
      value={description}
    ></input>
  )

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="font-bold text-3xl text-white -mt-24">
          Project Information
        </div>
      </div>
      <div className="justify-between items-center">
        <div className="flex flex-col items-center bg-slate-800 p-6 rounded-md border-2 border-white mx-24 mb-5">
          <div>
            <h1 className="text-2xl font-bold underline mb-5 mr-5">Name</h1>
            <div className="flex space-x-2 items-center"></div>
          </div>
          {NameInput}
        </div>

        <div className="flex flex-col items-center bg-slate-800 p-8 rounded-md border-2 border-white mx-24 mb-5">
          <div>
            <h1 className="text-2xl font-bold underline mb-5 mr-5">
              Description
            </h1>
            <div className="flex space-x-2 items-center"></div>
          </div>
          {DescriptionInput}
        </div>
      </div>

      <div className="bg-slate-800 p-8 rounded-md border-2 border-white mx-24 mb-5">
        <h1 className="text-2xl font-bold underline mb-5 text-center">
          Upload A Dataset
        </h1>
        <FileUploader />
      </div>

      <div className="flex justify-between mx-24 py-16 -mt-16">
        <button
          className="btn btn-error btn-lg"
          onClick={() => {
            dispatch(setCurrWorkspaceId(-1))
            dispatch(setGeneralData(defaultData))
          }}
        >
          Exit
        </button>
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            dispatch(incrementStep())
            dispatch(setGeneralData(collectedData))
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default WorkspaceStep1
