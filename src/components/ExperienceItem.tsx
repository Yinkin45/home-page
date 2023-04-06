type ExperienceItemProps = {
  title: string
  company: string
  startDate: string
  endDate: string
  duties: string[]
}

const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="text-left">{props.company}</div>
        </div>
        <div className="flex-1">
          <div className="text-left text-xl">
            {props.startDate} - {props.endDate}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-left">{props.title}</div>
        </div>
      </div>
      <div className="px-4 py-2">
        <ul className="list-disc text-gray-400">
          {props.duties.map((duty, index) => {
            return (
              <li key={index}>
                <p className="text-left py-2 text-xl text-gray-400">{duty}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceItem
