import React from 'react'

type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = (props: ParagraphProps) => {
  return <p className=" text-left p-2 text-xl">{props.children}</p>
}

export default Paragraph
