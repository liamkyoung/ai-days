import React from 'react'
import HeaderMetaData from '../components/utility/HeaderMetaData'
import Header from '../components/utility/Header'
import Workspace from '../components/medium/Workspace'
import Value from '../components/medium/Value'

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
      <div className="flex justify-center items-start m-24">
        <div className="m-5 space-y-7">
          <Value
            title="Accessible Education"
            body="As university students, we know the value of education. That is why we are making complex, revolutionary technology like machine learning accessible and easy to use.​"
          />
          <Value
            title="Curiosity"
            body="Curiosity is the catalyst for innovation and the drive humans have to create new solutions to tough challenges."
          />
        </div>
        <div className="m-5 space-y-7">
          <Value
            title="Transcendence"
            body="We believe that the pursuit of knowledge has no bounds. The greatest available resources should be used to propel every sector of human endeavor​"
          />
          <Value
            title="Cutting Edge Research"
            body="The world's next greatest discovery is at your fingertips. Revolutionary science can come from anyone given the right mindset and the right tools."
          />
        </div>
      </div>
    </div>
  )
}

export default values
