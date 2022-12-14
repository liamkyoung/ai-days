import React from 'react'
import {
  decrementStep,
  incrementStep,
  setStep,
} from '../../redux/slices/uiSlice'
import { setCurrWS_ID } from '../../redux/slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { json } from 'stream/consumers'

type Props = {}

function WorkspaceFinal({}: Props) {
  const dispatch = useDispatch()
  const ws = useSelector((state: RootState) => state.ui.ai_data)
  const wsJson = JSON.stringify(ws)
  const { data: session } = useSession()

  let myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  let raw = JSON.stringify({
    userEmail: session?.user?.email,
    projectData: wsJson,
    aiData: {
      modelScore: 98,
      features: ['Example'],
    },
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="wsStepTitle">Summary</h1>
      </div>
      <div className="wsContainer flex space-x-24 mt-24">
        <div className="space-y-7 w-1/2">
          <h1 className="underline font-bold text-3xl mb-5">
            Project Information
          </h1>
          <div className="flex space-between">
            <h1 className="flex-1">Name: </h1>
            <h1 className="italic">{ws?.name}</h1>
          </div>
          <div className="flex space-between">
            <h1 className="flex-1">Description: </h1>
            <h1 className="italic">{ws?.description}</h1>
          </div>
          <div className="flex space-between">
            <h1 className="flex-1">Data File: </h1>
            <h1 className="italic">{ws?.file}</h1>
          </div>
        </div>
        <div className="border-2 border-l-white bg-white my-5 rounded-lg"></div>
        <div className="space-y-1 w-1/2">
          <h1 className="underline text-3xl font-bold mb-5">
            Data Information
          </h1>
          <div className="flex space-between">
            <h1 className="flex-1">Data Type: </h1>
            <h1 className="italic">{ws?.datatype.toString().toUpperCase()}</h1>
          </div>
          <div className="flex space-between">
            <h1 className="flex-1">Feature Format: </h1>
            <h1 className="italic">{ws?.format.toString().toUpperCase()}</h1>
          </div>
          <div className="flex space-between">
            <h1 className="flex-1">Image Data: </h1>
            <h1 className="italic">{ws?.imageData.toString().toUpperCase()}</h1>
          </div>
          <div className="flex space-between">
            <h1 className="flex-1">Analysis Type: </h1>
            <h1 className="italic">
              {ws?.predOrCluster ? 'PREDICTION' : 'CLUSTERING'}
            </h1>
          </div>
          <div className="flex space-between">
            <h1 className="flex-1">Generative Model: </h1>
            <h1 className="italic">
              {ws?.predOrCluster.toString().toUpperCase()}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between m-24">
        <button
          className="btn btn-error btn-lg"
          onClick={() => {
            dispatch(decrementStep())
          }}
        >
          Go Back
        </button>
        <div className="flex">
          <h1 className="text-sm italic mr-5">Everything look good?</h1>
          <button
            className="btn btn-success hover:btn-primary btn-lg"
            onClick={() => {
              dispatch(setCurrWS_ID(-2))
              dispatch(setStep(1))
              fetch('/api/generateResults', requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log('error', error))
            }}
          >
            Finish!
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceFinal
