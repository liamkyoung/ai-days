import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrWS_ID } from '../../redux/slices/uiSlice'

type Props = {
  name: string
  uploadStatus: number
  projectId: number
}

function ProjectLink({ projectId, name, uploadStatus }: Props) {
  const dispatch = useDispatch()
  return (
    <>
      <div
        onClick={() => dispatch(setCurrWS_ID(projectId))}
        className="px-12 flex text-white hover:opacity-80 font-bold justify-between cursor-pointer"
      >
        <h1 className="text-3xl">{name}</h1>
        {uploadStatus === 100 ? (
          <h1 className="text-green-600">Upload Complete</h1>
        ) : (
          <h1 className="text-white text-left">Uploading: {uploadStatus}%</h1>
        )}
        <div onClick={() => dispatch(setCurrWS_ID(projectId))}>
          <h1 className="text-yellow-400 hover:text-orange-400">
            View Results
          </h1>
        </div>
      </div>
    </>
  )
}

export default ProjectLink
