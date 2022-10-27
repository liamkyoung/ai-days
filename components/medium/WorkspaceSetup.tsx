import React, { useState, useEffect } from 'react'
import LeftSideWorkspace from '../small/LeftSideWorkspace'
import WorkspaceStep1 from '../small/WorkspaceStep1'
import WorkspaceStep2 from '../small/WorkspaceStep2'
import WorkspaceFinal from '../small/WorkspaceFinal'

type Props = {
  step: number
}

function WorkspaceSetup({ step }: Props) {
  const [rightSide, setRightSide] = useState(<></>)

  useEffect(() => {
    if (step === 1) setRightSide(<WorkspaceStep1 />)
    if (step === 2) setRightSide(<WorkspaceStep2 />)
    if (step === 3) setRightSide(<WorkspaceFinal />)
  }, [step])

  return (
    <div>
      <h1 className="text-bold text-white ml-16 text-3xl">
        Create A New Workspace
      </h1>
      <div className="grid grid-cols-3 h-full text-3xl text-white">
        <LeftSideWorkspace step={step} />
        <div className="col-span-2">{rightSide}</div>
      </div>
    </div>
  )
}

export default WorkspaceSetup
