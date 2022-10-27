import React from 'react'

type Props = {
  step: number
}

function LeftSideWorkspace({ step }: Props) {
  return (
    <div className="col-span-1 border-r-2 border-blue-50 col-start-1 ml-16 pt-16">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <div
            className={`h-10 w-10 rounded-full ${
              step === 1 ? 'bg-slate-600' : 'bg-black'
            }`}
          ></div>
          <h1 className="font-bold pl-12">Project Information</h1>
        </div>

        <div className="h-48 w-5 border-r-2 border-white my-5"></div>
        <div className="flex items-center">
          <div
            className={`h-10 w-10 rounded-full ${
              step === 1 ? 'bg-white' : ''
            } ${step === 2 ? 'bg-slate-600' : ''} ${
              step === 3 ? 'bg-black' : ''
            }`}
          ></div>
          <h1 className="font-bold pl-12">Dataset Information</h1>
        </div>
        <div className="h-48 w-5 border-r-2 border-white my-5"></div>
        <div className="flex items-center">
          <div
            className={`h-10 w-10 rounded-full ${
              step === 3 ? 'bg-slate-600' : 'bg-white'
            }`}
          ></div>
          <h1 className="font-bold pl-12">Confirmation</h1>
        </div>
      </div>
    </div>
  )
}

export default LeftSideWorkspace
