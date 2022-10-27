import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  decrementStep,
  incrementStep,
  setGeneralData,
  AI_DATA,
} from '../../redux/slices/uiSlice'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import WorkspaceContainer from '../medium/WorkspaceContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

function WorkspaceStep2({}: Props) {
  const [dataType, setDataType] = useState('numerical')
  const [format, setFormat] = useState('columns')
  const [image, setImage] = useState(false)
  const [prediction, setPrediction] = useState(false)
  const generalData = useSelector((state: RootState) => state.ui.ai_data)

  const collectedData: AI_DATA = {
    name: generalData.name,
    description: generalData.description,
    file: generalData.file,
    datatype: dataType,
    formatedCorrectly: format,
    imageData: image,
    predOrCluster: prediction,
    generativeModel: false,
    advancedOptions: {},
  }

  const dispatch = useDispatch()
  const DataTypeCheckbox = (
    <div>
      <div className="form-control rounded-lg">
        <label
          onClick={() => setDataType('numerical')}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              dataType === 'numerical' ? 'font-bold' : ''
            } mr-5`}
          >
            Numerical
          </h1>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={dataType === 'numerical' ? true : false}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          onClick={() => setDataType('categorical')}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              dataType === 'categorical' ? 'font-bold' : ''
            } mr-5`}
          >
            Categorical
          </h1>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={dataType === 'categorical' ? true : false}
          />
        </label>
      </div>
    </div>
  )

  const FormatCheckbox = (
    <div>
      <div className="form-control">
        <label
          onClick={() => setFormat('columns')}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              format === 'columns' ? 'font-bold' : ''
            } mr-5`}
          >
            Features as Columns
          </h1>
          <input
            type="radio"
            name="radio-8"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={format === 'columns' ? true : false}
          />
        </label>
      </div>
      <div className="form-control rounded-lg">
        <label
          onClick={() => setFormat('rows')}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              format === 'rows' ? 'font-bold' : ''
            } mr-5`}
          >
            Features as Rows
          </h1>
          <input
            type="radio"
            name="radio-7"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={format === 'rows' ? true : false}
          />
        </label>
      </div>
    </div>
  )

  const ImageData = (image: boolean) => (
    <div>
      <div className="form-control">
        <label onClick={() => setImage(true)} className="label cursor-pointer">
          <h1
            className={`label-text text-white text-xl ${
              image ? 'font-bold' : ''
            } mr-5`}
          >
            Yes
          </h1>
          <input
            type="radio"
            name="radio-11"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={image}
          />
        </label>
      </div>
      <div className="form-control rounded-lg">
        <label onClick={() => setImage(false)} className="label cursor-pointer">
          <h1
            className={`label-text text-white text-xl ${
              !image ? 'font-bold' : ''
            } mr-5`}
          >
            No
          </h1>
          <input
            type="radio"
            name="radio-12"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={!image}
          />
        </label>
      </div>
    </div>
  )

  const Prediction = (prediction: boolean) => (
    <div>
      <div className="form-control">
        <label
          onClick={() => setPrediction(true)}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              prediction ? 'font-bold' : ''
            } mr-5`}
          >
            Prediction
          </h1>
          <input
            type="radio"
            name="radio-8"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={prediction}
          />
        </label>
      </div>
      <div className="form-control rounded-lg">
        <label
          onClick={() => setPrediction(false)}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              !prediction ? 'font-bold' : ''
            } mr-5`}
          >
            Clustering
          </h1>
          <input
            type="radio"
            name="radio-7"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={!prediction}
          />
        </label>
      </div>
    </div>
  )

  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <div className="font-bold text-3xl text-white">
          Tell Us About Your Data
        </div>
      </div>

      {/* */}
      <div className="overflow-scroll overflow-x-hidden h-[550px]">
        <WorkspaceContainer
          title="Type of Data"
          helpText="Data is usually classified into 2 categories: numerical
              &#40;number-based&#41;, and categorical &#40;&#41;"
          help={true}
          left={DataTypeCheckbox}
        />

        <WorkspaceContainer
          title="Target Data Type"
          helpText="Data is usually classified into 2 categories: numerical
              &#40;number-based&#41;, and categorical &#40;&#41;"
          help={true}
          left={FormatCheckbox}
        />

        <WorkspaceContainer
          title="Image Data"
          helpText="Data is usually classified into 2 categories: numerical
              &#40;number-based&#41;, and categorical &#40;&#41;"
          help={true}
          left={ImageData(image)}
        />

        <WorkspaceContainer
          title="Prediction or Clustering"
          helpText="Data is usually classified into 2 categories: numerical
              &#40;number-based&#41;, and categorical &#40;&#41;"
          help={true}
          left={Prediction(prediction)}
        />
      </div>

      <div className="flex justify-between mx-24 mt-12 pb-10">
        <button
          className="btn btn-error btn-lg"
          onClick={() => {
            dispatch(decrementStep())
          }}
        >
          Go Back
        </button>
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            dispatch(incrementStep())
            dispatch(setGeneralData(collectedData))
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default WorkspaceStep2
