import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Button } from './ui/button'

export const Contact = () => {
  return (
    <section id='contact' className='py-20 px-4 bg-zinc-800/30'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Gostou do meu trabalho?
          </h2>
          <p className='text-zinc-400'>
            Entre em contato ou acompanhe as minhas redes sociais!
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto'>
          <Button
            variant='default'
            className='border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white h-12'
            asChild
          >
            <a
              href='https://www.linkedin.com/in/gabiicarniel/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={20} className='mr-2' />
              LinkedIn
            </a>
          </Button>
          <Button
            variant='default'
            className='border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white h-12'
            asChild
          >
            <a
              href='https://www.instagram.com/gabisleira/ '
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram size={20} className='mr-2' />
              Instagram
            </a>
          </Button>
          <Button
            variant='default'
            className='border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white h-12'
            asChild
          >
            <a
              href='https://github.com/gabislera'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={20} className='mr-2' />
              GitHub
            </a>
          </Button>
          <Button
            variant='default'
            className='border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white h-12'
            asChild
          >
            <a href='mailto:gabrielacarniel@gmail.com'>
              <FaEnvelope size={20} className='mr-2' />
              E-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
