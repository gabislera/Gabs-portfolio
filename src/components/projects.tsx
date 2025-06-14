import { projects } from '../lib/constants'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

export const Projects = () => {
  return (
    <section id='projects' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-white'>
            Projetos em destaque
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300'
            >
              <a href={project.url} target='_blank' rel='noopener noreferrer'>
                <div className={`h-48 flex items-center justify-center`}>
                  <div className='w-full h-full bg-black/20 flex items-center justify-center'>
                    <img
                      src={project.image}
                      alt={project.title}
                      width={100}
                      height={100}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className='text-white'>{project.title}</CardTitle>
                  <CardDescription className='text-zinc-400'>
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
