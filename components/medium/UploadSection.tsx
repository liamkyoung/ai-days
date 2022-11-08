import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementStep, setCurrWS_ID } from '../../redux/slices/uiSlice'
import { setCurrWorkspaceId } from '../../redux/slices/userSlice'
import FileUploader from '../utility/FileUploader'

type Props = {}

function UploadSection({}: Props) {
  const dispatch = useDispatch()
  return (
    <div className="space-y-3 flex flex-col justify-center items-center">
      <button
        onClick={() => dispatch(setCurrWS_ID(0))}
        className="btn btn-success hover:btn-primary btn-lg"
      >
        Create New Workspace
      </button>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider w-full">OR</div>
      </div>
      <h1 className="font-bold">Quick Upload</h1>
      <FileUploader />
    </div>
  )
}

export default UploadSection
