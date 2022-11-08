import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  decrementStep,
  incrementStep,
  setGeneralData,
} from '../../redux/slices/uiSlice'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import WorkspaceContainer from '../medium/WorkspaceContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import defaultData from '../../lib/constants'

type Props = {}

function WorkspaceStep2({}: Props) {
  const generalData = useSelector((state: RootState) => state.ui.ai_data)

  const dispatch = useDispatch()
  const DataTypeCheckbox = () => (
    <div>
      <div className="form-control rounded-lg">
        <label
          onClick={() => {
            if (generalData.datatype !== 'numerical')
              dispatch(
                setGeneralData({ ...generalData, datatype: 'numerical' })
              )
          }}
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              generalData.datatype === 'numerical' ? 'font-bold' : ''
            } mr-5`}
          >
            Numerical
          </h1>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={generalData.datatype === 'numerical' ? true : false}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          onClick={() =>
            dispatch(
              setGeneralData({ ...generalData, datatype: 'categorical' })
            )
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              generalData.datatype === 'categorical' ? 'font-bold' : ''
            } mr-5`}
          >
            Categorical
          </h1>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={generalData.datatype === 'categorical' ? true : false}
          />
        </label>
      </div>
    </div>
  )

  const FormatCheckbox = () => (
    <div>
      <div className="form-control">
        <label
          onClick={() =>
            dispatch(setGeneralData({ ...generalData, format: 'columns' }))
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              generalData.format === 'columns' ? 'font-bold' : ''
            } mr-5`}
          >
            Features as Columns
          </h1>
          <input
            type="radio"
            name="radio-8"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={generalData.format === 'columns' ? true : false}
          />
        </label>
      </div>
      <div className="form-control rounded-lg">
        <label
          onClick={() =>
            dispatch(setGeneralData({ ...generalData, format: 'rows' }))
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              generalData.format === 'rows' ? 'font-bold' : ''
            } mr-5`}
          >
            Features as Rows
          </h1>
          <input
            type="radio"
            name="radio-0"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={generalData.format === 'rows' ? true : false}
          />
        </label>
      </div>
    </div>
  )

  const ImageData = () => (
    <div>
      <div className="form-control">
        <label
          onClick={() =>
            dispatch(setGeneralData({ ...generalData, imageData: true }))
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              generalData.imageData ? 'font-bold' : ''
            } mr-5`}
          >
            Yes
          </h1>
          <input
            type="radio"
            name="radio-11"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={generalData.imageData}
          />
        </label>
      </div>
      <div className="form-control rounded-lg">
        <label
          onClick={() =>
            dispatch(setGeneralData({ ...generalData, imageData: false }))
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              !generalData.imageData ? 'font-bold' : ''
            } mr-5`}
          >
            No
          </h1>
          <input
            type="radio"
            name="radio-12"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={!generalData.imageData}
          />
        </label>
      </div>
    </div>
  )

  const Prediction = () => (
    <div>
      <div className="form-control">
        <label
          onClick={() =>
            dispatch(setGeneralData({ ...generalData, predOrCluster: true }))
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              generalData.predOrCluster ? 'font-bold' : ''
            } mr-5`}
          >
            Prediction
          </h1>
          <input
            type="radio"
            name="radio-8"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={generalData.predOrCluster}
          />
        </label>
      </div>
      <div className="form-control rounded-lg">
        <label
          onClick={() =>
            dispatch(setGeneralData({ ...generalData, predOrCluster: false }))
          }
          className="label cursor-pointer"
        >
          <h1
            className={`label-text text-white text-xl ${
              !generalData.predOrCluster ? 'font-bold' : ''
            } mr-5`}
          >
            Clustering
          </h1>
          <input
            type="radio"
            name="radio-7"
            className="radio checked:bg-green-500 bg-zinc-100"
            checked={!generalData.predOrCluster}
          />
        </label>
      </div>
    </div>
  )

  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <div className="wsStepTitle">Tell Us About Your Data</div>
      </div>

      {/* */}
      <div className="overflow-scroll overflow-x-hidden h-[550px]">
        <WorkspaceContainer
          title="Type of Data"
          helpText="Data is usually classified into 2 categories: numerical
              &#40;number-based&#41;, and categorical &#40;&#41;"
          help={true}
          left={DataTypeCheckbox()}
        />

        <WorkspaceContainer
          title="Target Data Type"
          helpText="Your data will be formatted such that either each row is a sample or each column is a sample."
          help={true}
          left={FormatCheckbox()}
        />

        <WorkspaceContainer
          title="Image Data"
          helpText="Is your data an image?"
          help={true}
          left={ImageData()}
        />

        <WorkspaceContainer
          title="Prediction or Clustering"
          helpText="Data is usually classified into 2 categories: numerical
              &#40;number-based&#41;, and categorical &#40;&#41;"
          help={true}
          left={Prediction()}
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
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default WorkspaceStep2
