import React from 'react'

type Props = {
  name: string
  uploadStatus: number
}

function ProjectLink({ name, uploadStatus }: Props) {
  return (
    <div className="px-12 flex text-white font-bold justify-between cursor-pointer">
      <h1 className="">{name}</h1>
      {uploadStatus === 100 ? (
        <h1 className="text-green-600">Upload Complete</h1>
      ) : (
        <h1 className="text-white text-left">Uploaing: {uploadStatus}%</h1>
      )}
      <h1 className="text-yellow-400">View Results</h1>
    </div>
  )
}

export default ProjectLink
