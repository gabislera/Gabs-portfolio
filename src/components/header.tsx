import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }
  return (
    <nav className='sticky top-0 w-full bg-zinc-900/85 backdrop-blur-sm border-b border-zinc-800 z-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='text-xl font-semibold text-zinc-300'>Gabs</div>

          <div className='hidden md:flex space-x-8'>
            {[
              { id: 'home', label: 'Início' },
              { id: 'about', label: 'Sobre' },
              { id: 'skills', label: 'Habilidades' },
              { id: 'projects', label: 'Projetos' },
              { id: 'contact', label: 'Contato' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-white ${
                  activeSection === item.id ? 'text-white' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-zinc-800'>
            {[
              { id: 'home', label: 'Início' },
              { id: 'about', label: 'Sobre' },
              { id: 'skills', label: 'Habilidades' },
              { id: 'projects', label: 'Projetos' },
              { id: 'contact', label: 'Contato' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className='block w-full text-left py-2 transition-colors hover:text-white text-zinc-400'
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
