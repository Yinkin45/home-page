import Card from '@components/Card'
import ExperienceItem from '@components/ExperienceItem'
import Paragraph from '@components/Paragraph'

export default function Home() {
  return (
    <>
      <main className={'bg-gray-900 text-gray-100 text-2xl text-center'}>
        <div className="flex flex-row space-x-4">
          <div className="flex-1">
            <Card>
              <div>Michael &ldquo;Miggle&rdquo; Rogers</div>
              <div>Full Stack Web Developer</div>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <div>Phone</div>
              <div>Location</div>
              <div>Email</div>
              <div>Links</div>
            </Card>
          </div>
        </div>
        <div className="p-2" />
        <div className="flex flex-col space-y-4">
          <div className="">
            <Card title="About Me">
              <Paragraph>
                As a security professional with years of experience in protecting sensitive data and critical systems, I
                have always been fascinated by the intersection of security and technology. With a passion for learning
                and a desire to expand my skill set, I am now transitioning into the world of web development using
                React.
              </Paragraph>
              <Paragraph>
                My experience in security has given me a strong foundation in problem-solving, critical thinking, and
                attention to detail - skills that are equally valuable in programming. As a self-taught developer, I am
                constantly exploring new concepts, experimenting with different tools, and honing my abilities to build
                high-quality applications that meet user needs.
              </Paragraph>
              <Paragraph>
                With a focus on front-end development using React, I am excited to collaborate with teams and clients to
                deliver creative, responsive, and user-friendly web applications. As someone who values security and
                reliability, I am committed to writing clean and efficient code that follows best practices and industry
                standards.
              </Paragraph>
              <Paragraph>
                I am excited to be a part of the vibrant and rapidly-evolving tech community, and look forward to
                contributing my skills and expertise to help build innovative and impactful products.
              </Paragraph>
            </Card>
          </div>
          <div className="">
            <Card title="Experience">
              <ExperienceItem
                title={'Security Professional'}
                company={'Allied Barton'}
                startDate={'Aug 2010'}
                endDate={'Nov 2012'}
                duties={[
                  'Performed security patrols of assigned areas to ensure protection of clients, visitors, property and equipment.',
                  'Monitored and authorized entrance and departure of employees, visitors, and other persons to guard against theft and maintain security of premises.',
                  'Prepared logs and reports of daily activities and irregularities, such as equipment or property damage, theft, presence of unauthorized persons, or unusual occurrences.',
                ]}
              />
            </Card>
          </div>
        </div>

        <div>Experience</div>
        <div>Education</div>
        <div>Skills</div>
        <div>Projects</div>
      </main>
    </>
  )
}
