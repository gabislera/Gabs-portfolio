import { Hero } from './components/hero'
import { Header } from './components/header'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function App() {
  return (
    <div className='min-h-screen bg-zinc-900 text-white'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
