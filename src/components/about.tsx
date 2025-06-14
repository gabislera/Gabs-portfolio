export const About = () => {
  return (
    <section id='about' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-white mb-8'>Sobre Mim</h2>
        <div className='grid gap-12 items-center'>
          <div className='text-start'>
            <p className='text-zinc-400 text-lg leading-relaxed mb-6'>
              Sou uma desenvolvedora apaixonada por criar soluções que unem
              performance, usabilidade e propósito. Tenho um perfil técnico com
              olhar crítico para a experiência do usuário — gosto de pensar
              tanto na lógica por trás quanto na forma como ela chega até as
              pessoas.
            </p>

            <p className='text-zinc-400 text-lg leading-relaxed mb-6'>
              Tenho facilidade em aprender rápido, me adaptar a novos contextos
              e colaborar com times diversos. Acredito que bons produtos nascem
              da combinação entre código bem escrito, comunicação transparente e
              intencionalidade em cada escolha técnica.
            </p>

            <p className='text-zinc-400 text-lg leading-relaxed mb-6'>
              Meu objetivo é seguir evoluindo, construindo aplicações modernas,
              acessíveis e que façam sentido de verdade — para quem usa e para
              quem desenvolve.
            </p>
          </div>
          {/* <div className='flex justify-center'>
            <div className='w-64 h-80 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden'>
              <img
                src='/public/profile.jpeg'
                alt='Gabriela Carniel'
                className='w-full h-full object-cover object-top rounded-lg'
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
