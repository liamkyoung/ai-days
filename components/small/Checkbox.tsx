import React from 'react'

type Props = {
option1Text: string
option1: boolean
option2Text: string
option2: boolean
}

function Checkbox({ option1Text, option1, option2Text, option2 }: Props) {
  return (
    <div>
    <div className="form-control rounded-lg">
      <label className="label cursor-pointer">
        <h1
          className={`label-text text-white text-xl 
            ${option1 ? 'font-bold' : ''}
          } mr-5`}
        >
          {Option1Text}
        </h1>
        <input
          type="radio"
          name="radio-6"
          className="radio checked:bg-red-500"
          onClick={() => setDataType('numerical')}
          checked={option1  ? true : false}
        />
      </label>
    </div>
    <div className="form-control">
      <label className="label cursor-pointer">
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
          className="radio checked:bg-blue-500"
          onClick={() => setDataType('categorical')}
          checked={dataType === 'categorical' ? true : false}
        />
      </label>
    </div>
  </div>
</div>
  )
}

export default Checkbox