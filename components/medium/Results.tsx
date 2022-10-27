import React from 'react'
import { AI_DATA } from '../../redux/slices/uiSlice'

type Props = {
  data: AI_DATA
}

function Results({ data }: Props) {
  return (
    <div className="flex-1 mx-24">
      <div className="text-white text-3xl space-y-5">
        <h1 className="font-bold">Results</h1>
        <h1 className="border-white border-t-2"></h1>
        <h1 className="hover:font-bold hover:cursor-pointer">Visualizations</h1>
      </div>
    </div>
  )
}

export default Results
