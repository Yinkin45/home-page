type SkillBadgeProps = {
  name: string
  imageURL?: string
}

const SkillBadge = (props: SkillBadgeProps) => {
  return (
    <div className="bg-gray-900 border-2 border-amber-500 rounded-xl">
      <div>
        <div className="text-left px-4 py-2 text-white hover:text-amber-300">{props.name}</div>
      </div>
    </div>
  )
}

export default SkillBadge
