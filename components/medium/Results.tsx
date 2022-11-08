import React from 'react'
import { AI_DATA } from '../../lib/constants'
import CustomPieChart from '../small/PieChart'
import Scatterplot from '../small/Scatterplot'

type Props = {
  data: AI_DATA
}

function Results({ data }: Props) {
  return (
    <div className="flex-1 mx-24">
      <div className="text-white text-3xl space-y-5">
        <h1 className="hover:font-bold hover:cursor-pointer">Visualizations</h1>
        <h1 className="border-white border-t-2"></h1>
        <h1 className="font-bold">Results</h1>
      </div>
      {/* <Scatterplot /> */}
      <div className="flex">
        <div className="text-white text-3xl space-y-3">
          <div>
            Model Accuracy: <b>100%</b>
          </div>
          <div>
            Total Data Points: <b>180</b>
          </div>
          <div></div>
        </div>
        <CustomPieChart data={data} />
      </div>
    </div>
  )
}

export default Results
