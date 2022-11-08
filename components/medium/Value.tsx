import React, { useState, useEffect } from 'react'
import AcademicCap from '@heroicons/react/24/solid/AcademicCapIcon'
import Clipboard from '@heroicons/react/24/solid/ClipboardDocumentCheckIcon'
import RocketLaunch from '@heroicons/react/24/solid/RocketLaunchIcon'
import PuzzlePiece from '@heroicons/react/24/solid/PuzzlePieceIcon'

type Props = {
  title: string
  body: string
}

function Value({ title, body }: Props) {
  const [activeEmoji, setEmoji] = useState(<></>)

  useEffect(() => {
    if (title === 'Accessible Education')
      setEmoji(<AcademicCap className="valueEmojis" />)
    if (title === 'Curiosity') setEmoji(<PuzzlePiece className="valueEmojis" />)
    if (title === 'Transcendence')
      setEmoji(<RocketLaunch className="valueEmojis" />)
    if (title === 'Cutting Edge Research')
      setEmoji(<Clipboard className="valueEmojis" />)
  }, [])

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-96 hover:cursor-pointer">
      <figure>
        {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
        <div className="bg-teal-700 h-48 w-full flex justify-center items-center">
          {activeEmoji}
        </div>
      </figure>
      <div className="card-body px-3">
        <h2 className="card-title">{title}</h2>
        <h2>{body}</h2>
      </div>
    </div>
  )
}

export default Value
