import React from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

type Props = {
  title: string
  helpText: string
  left: React.Component
  help: boolean
}

function WorkspaceContainer({ title, helpText, left, help }: Props) {
  return (
    <div className="flex justify-between bg-slate-800 p-10 rounded-md border-2 border-white mx-24 mb-5">
      <div>
        <h1 className="text-2xl font-bold underline mb-5 mr-5">{title}</h1>
        <div className="flex space-x-2 items-center">
          {help ? (
            <QuestionMarkCircleIcon className="h-8 text-slate-400" />
          ) : null}
          <h2 className="text-xl italic">{helpText}</h2>
        </div>
      </div>
      {left}
    </div>
  )
}

export default WorkspaceContainer
