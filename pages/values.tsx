import React from 'react'
import HeaderMetaData from '../components/utility/HeaderMetaData'
import Header from '../components/utility/Header'
import Value from '../components/medium/Value'
import ValueData from '../data/values.json'

type Props = {}

function values({}: Props) {
  return (
    <div className="page">
      <HeaderMetaData title={'eAIsy | Values'} />
      <Header />

      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-3xl font-bold mb-5">OUR VALUES</h1>
        <div className="w-1/2 border-l-white border-2 bg-white mb-5"></div>
        <h1 className="text-xl font-bold italic">
          Here at eAIsy, we want you to...
        </h1>
      </div>
      <div className="grid justify-center grid-cols-2 gap-y-12">
        {ValueData.map((value, i) => (
          <div key={i} className="flex flex-1 justify-center items-center">
            <Value title={value.title} body={value.body} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default values
