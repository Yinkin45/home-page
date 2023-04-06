import Conditional from '@components/Conditional'
import React from 'react'

type CardProps = {
  title?: string
  children?: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className="bg-gray-800 rounded-2xl border-2 border-gray-700 p-2 w-full h-full">
      <Conditional condition={props.title != null}>
        <div className="text-4xl text-left p-4 text-amber-400">{props.title}</div>
        <div className="bg-gray-700 h-1 mx-4" />
      </Conditional>
      <div>{props.children}</div>
    </div>
  )
}

export default Card
