import React from 'react'

type SkillGridProps = {
  children: React.ReactNode
}

const SkillGrid = (props: SkillGridProps) => {
  return <div className="grid grid-cols-4 gap-4 p-4">{props.children}</div>
}

export default SkillGrid
