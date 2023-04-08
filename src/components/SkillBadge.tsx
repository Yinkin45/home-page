import Conditional from '@components/Conditional'

type SkillBadgeProps = {
  name: string
  iconClass?: string
}

const SkillBadge = (props: SkillBadgeProps) => {
  return (
    <div className="bg-gray-900 border-2 border-amber-500 rounded-xl px-4 py-2 min-h-[60px]">
      <div className={'flex flex-row space-x-2 place-items-center'}>
        <Conditional condition={props.iconClass != null}>
          <i className={`text-4xl pr-2 ${props.iconClass} text-white`} />
        </Conditional>
        <div className="text-left text-white hover:text-amber-300">{props.name}</div>
      </div>
    </div>
  )
}

export default SkillBadge
