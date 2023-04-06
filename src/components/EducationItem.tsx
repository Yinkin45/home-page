type EducationItemProps = {
  school: string
  degree: string
  startDate: string
  endDate: string
  gpa: string
  activities: string[]
}

const EducationItem = (props: EducationItemProps) => {
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="text-left">{props.school}</div>
        </div>
        <div className="flex-1">
          <div className="text-left text-xl">
            {props.startDate} - {props.endDate}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-left">
            {props.degree} - {props.gpa} GPA
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <ul className="list-disc text-gray-400">
          {props.activities.map((activity, index) => {
            return (
              <li key={index}>
                <p className="text-left py-2 text-xl text-gray-400">{activity}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EducationItem
