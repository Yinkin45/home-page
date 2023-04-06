import Link from 'next/link'
import React from 'react'

type HyperlinkProps = {
  href: string
  children: React.ReactNode
}

const Hyperlink = (props: HyperlinkProps) => {
  return (
    <div className="text-right text-amber-400 hover:text-amber-300 hover:underline hover:decoration-solid">
      <Link href={props.href}>{props.children}</Link>
    </div>
  )
}

export default Hyperlink
