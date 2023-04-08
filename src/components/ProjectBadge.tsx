import Conditional from '@components/Conditional'
import Image from 'next/image'

type ProjectBadgeProps = {
  name: string
  description: string
  href: string
  imageURL?: string
}

const ProjectBadge = (props: ProjectBadgeProps) => {
  return (
    <div className="min-h-[200px] p-4 bg-gray-900 border-amber-500 border-2 rounded-xl hover:border-amber-300">
      <a href={props.href} target="_blank" rel="noreferrer">
        <div className="flex flex-col space-y-2 place-items-center group/project">
          <div className={'py-2'}>
            <Conditional condition={props.imageURL != null}>
              <Image src={props.imageURL!} alt={props.name} width={64} height={64} />
            </Conditional>
            <Conditional condition={!props.imageURL}>
              <div className="bg-gray-700 min-w-[64px] min-h-[64px] w-[64px] h-[64px] text-center text-3xl">???</div>
            </Conditional>
          </div>
          <div className="text-3xl group-hover/project:text-amber-300 group-hover/project:underline group-hover/project:decoration-2">
            {props.name}
          </div>
          <div className="text-xl text-gray-400">{props.description}</div>
        </div>
      </a>
    </div>
  )
}

export default ProjectBadge
