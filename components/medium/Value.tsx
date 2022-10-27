import React from 'react'

type Props = {
  title: string
  body: string
}

function Value({ title, body }: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-96 hover:cursor-pointer">
      <figure>
        {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
        <div className="bg-teal-700 h-48 w-full"></div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Value
