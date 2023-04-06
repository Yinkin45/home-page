import React from 'react'

type ConditionalProps = {
  condition: boolean
  children: React.ReactNode
}

const Conditional = (props: ConditionalProps) => {
  return <>{props.condition ? props.children : null}</>
}

export default Conditional
