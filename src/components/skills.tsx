import { services } from '../lib/constants'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export const Skills = () => {
  return (
    <section id='skills' className='py-20 px-4 bg-zinc-800/30'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-white mb-16'>
          Habilidades
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='bg-zinc-800/50 border-zinc-700 text-center hover:transform hover:scale-[1.02] transition-all duration-300'
            >
              <CardHeader>
                <div className='mx-auto mb-4 p-3 bg-zinc-700 rounded-lg w-fit'>
                  <service.icon size={32} className='text-zinc-300' />
                </div>
                <CardTitle className='text-white'>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-zinc-400'>
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
