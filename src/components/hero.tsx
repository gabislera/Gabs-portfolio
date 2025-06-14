import { FaChevronDown } from 'react-icons/fa'
import { techStack } from '../lib/constants'
import { Badge } from './ui/badge'

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='flex items-center justify-center px-4 pt-20 overflow-hidden'
    >
      <div className='text-center max-w-4xl mx-auto w-full'>
        <div className='mb-8'>
          <div className='w-32 h-32 mx-auto mb-6 rounded-full border-2 border-zinc-600 overflow-hidden'>
            <div className='w-full h-full bg-zinc-700 flex items-center justify-center'>
              <img
                src='/public/profile.jpeg'
                alt='Gabriela Carniel'
                className='w-full h-full object-cover object-top'
              />
            </div>
          </div>
        </div>

        <div className='mb-6 px-4 sm:px-0'>
          <p className='text-zinc-400 mb-2'>
            Meu nome é{' '}
            <span className='text-white font-semibold'>Gabriela Carniel</span> e
            sou
          </p>
          <h1 className='text-4xl md:text-4xl font-bold text-white mb-6'>
            Desenvolvedora Fullstack
          </h1>
        </div>

        <p className='text-zinc-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0'>
          Transformo necessidades em aplicações web, explorando o frontend e
          backend, desenvolvendo soluções digitais através de minha paixão pela
          tecnologia, com foco em interfaces funcionais e eficientes.
        </p>

        <div className='mb-12 overflow-hidden w-full'>
          <div className='flex space-x-4 animate-scroll w-max'>
            {[...techStack, ...techStack].map((tech, index) => (
              <Badge
                key={index}
                variant='outline'
                className='border-zinc-600 text-zinc-300 bg-zinc-800/50 whitespace-nowrap px-4 py-2 flex items-center gap-2 rounded-full flex-shrink-0'
              >
                <tech.icon
                  size={16}
                  className='text-zinc-300'
                  style={{ color: tech.color }}
                />
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className='animate-bounce transition-colors hover:text-white cursor-pointer'
          aria-label='Ir para seção sobre mim'
        >
          <FaChevronDown
            size={20}
            className='text-zinc-400 mx-auto hover:text-white transition-colors'
          />
        </button>
      </div>
    </section>
  )
}
