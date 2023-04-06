import Card from '@components/Card'
import EducationItem from '@components/EducationItem'
import ExperienceItem from '@components/ExperienceItem'
import Hyperlink from '@components/Hyperlink'
import Paragraph from '@components/Paragraph'
import SkillBadge from '@components/SkillBadge'
import SkillGrid from '@components/SkillGrid'

export default function Home() {
  return (
    <>
      <main className={'bg-gray-900 text-gray-100 text-2xl text-center'}>
        <div className="flex flex-row space-x-4">
          <div className="flex-1">
            <Card>
              <div className="flex flex-row p-4 space-x-8 place-items-center">
                <div className="grid place-items-center bg-gray-900 border-4 border-amber-500 rounded-full min-w-[80px] min-h-[80px]">
                  <div className="text-center text-4xl pb-1">MR</div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-left text-4xl">Michael Rogers</div>
                  <div className="text-left text-3xl text-amber-400">Full Stack Web Developer</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <div className="flex flex-col p-2">
                <div className="text-right">Indian Land, SC</div>
                <Hyperlink href={'mailto:mtr293@gmail.com'}>Email Me</Hyperlink>
                <div className="flex flex-row-reverse">
                  <Hyperlink href={'https://miggle.io'}>https://miggle.io</Hyperlink>
                  <div className="px-2 text-gray-600">|</div>
                  <Hyperlink href={'https://www.linkedin.com/in/mike-rogers88/'}>LinkedIn</Hyperlink>
                  <div className="px-2 text-gray-600">|</div>
                  <Hyperlink href={'https://github.com/miggle88'}>GitHub</Hyperlink>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="p-2" />
        <div className="flex flex-col space-y-4">
          <div>
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
          <div>
            <Card title="Experience">
              <ExperienceItem
                title={'Marketing Intern'}
                company={'Smarter Systems'}
                startDate={'Feb 2011'}
                endDate={'May 2011'}
                duties={[
                  'Developed and implemented marketing strategies to increase brand awareness and customer engagement.',
                  'Created and distributed promotional materials, including flyers, brochures, and posters.',
                  'Designed and maintained a spreadsheet of customer information.',
                ]}
              />
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
              <ExperienceItem
                title={'Security Supervisor'}
                company={'Allied Universal'}
                startDate={'Nov 2012'}
                endDate={'Dec 2019'}
                duties={[
                  'Supervised and coordinated activities of security personnel at assigned site to ensure that services are provided according to contract specifications and that client needs are met.',
                  'Conducted investigations of incidents and accidents to gather facts and prepare reports.',
                  'Created schedules and assigned duties to security personnel to ensure adequate coverage.',
                ]}
              />
              <ExperienceItem
                title={'Full Stack Web Developer'}
                company={'Self-Taught'}
                startDate={'Jan 2020'}
                endDate={'Present'}
                duties={[
                  'Developed a front-end application using React, Tailwind CSS, and TypeScript.',
                  'Built a back-end service layer using tRPC, Next.js, and TypeScript.',
                  'Added persistence to the application using MySQL and Prisma.',
                  'Implemented authentication using NextAuth.js with GitHub OAuth.',
                  'Deployed the application to Vercel, using CI/CD to automatically deploy changes to the main branch.',
                ]}
              />
            </Card>
          </div>
          <div>
            <Card title="Education">
              <EducationItem
                school={'Johnson & Wales University'}
                degree={'B.A. in Marketing'}
                startDate={'2007'}
                endDate={'2011'}
                gpa={'3.6'}
                activities={[
                  'Facilitated campus tours for prospective students and their families.',
                  "Served as a student ambassador for the university's marketing department.",
                  'Represented the university at various events and conferences.',
                ]}
              />
            </Card>
          </div>
          <div>
            <Card title="Skills">
              <SkillGrid>
                <SkillBadge name={'TypeScript'} />
                <SkillBadge name={'JavaScript'} />
                <SkillBadge name={'Python'} />
                <SkillBadge name={'Git'} />
                <SkillBadge name={'React'} />
                <SkillBadge name={'Tailwind CSS'} />
                <SkillBadge name={'Next.js'} />
                <SkillBadge name={'NextAuth.js'} />
                <SkillBadge name={'tRPC'} />
                <SkillBadge name={'MySQL'} />
                <SkillBadge name={'Prisma'} />
                <SkillBadge name={'Vercel'} />
              </SkillGrid>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
