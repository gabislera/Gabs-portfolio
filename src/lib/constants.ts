import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPrisma,
  SiExpress,
} from 'react-icons/si'
import { FaCode, FaDatabase, FaGlobe } from 'react-icons/fa'

export const techStack = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
]

export const projects = [
  {
    title: 'KyoGo',
    description:
      'Gerenciamento completo de academias. O sistema oferece funcionalidades para administradores e membros, incluindo busca de academias próximas e check-in baseado em localização.',
    image:
      'https://github.com/user-attachments/assets/8720b263-2f4c-4f4d-b0ed-318e57d2a53f',
    url: 'https://github.com/gabislera/KyoGo',
  },
  {
    title: 'PinMe',
    description:
      'Cadastro, visualização e gerenciamento de contatos em um mapa interativo do Google Maps, com geolocalização, busca por CEP e autenticação.',
    image:
      'https://github.com/user-attachments/assets/981af0a5-c6f0-4a63-9d54-e091dd90c7b1',
    url: 'https://github.com/gabislera/PinMe',
  },
  {
    title: 'Food Explorer',
    description:
      'Aplicação de restaurante onde usuários podem navegar por pratos, ver detalhes e buscar por nome ou ingrediente. Admins podem cadastrar, editar e remover produtos.',
    image:
      'https://github.com/gabislera/Food-explorer-fullstack/assets/112272723/5250ba2e-8824-4f79-8760-3443c5b37965',
    url: 'https://github.com/gabislera/Food-explorer-fullstack',
  },
  {
    title: 'Stripe Shop',
    description:
      'Loja virtual onde usuários podem explorar produtos, adicioná-los ao carrinho e finalizar a compra via Stripe. Totalmente responsivo.',
    image:
      'https://github.com/gabislera/Ignite-shop/assets/112272723/f365c0b2-e799-430c-8bf7-73ac634dc484',
    url: 'https://github.com/gabislera/Ignite-shop',
  },
  {
    title: 'Call',
    description:
      'Sistema de agendamento de reuniões via Google Calendar. Permite autenticação com Google, definição de disponibilidade e link público para agendamentos.',
    image:
      'https://github.com/gabislera/Ignite-Call/assets/112272723/0347f06a-88d6-44ee-911c-151ee0dc0749',
    url: 'https://github.com/gabislera/Ignite-Call',
  },
  // {
  //   title: 'Coffee Delivery',
  //   description:
  //     'Loja virtual de cafés com sistema de carrinho e checkout. O usuário escolhe quantidade, preenche o endereço e seleciona o método de pagamento.',
  //   image:
  //     'https://github.com/gabislera/Cofee-Delivery/assets/112272723/ada5c4d7-249b-4f15-94b3-c1edaaba9f43',
  // },
  {
    title: 'Pizza Shop',
    description:
      'Sistema completo para gestão de pizzarias, com dashboard, gerenciamento de pedidos, avaliações, controle de status e autenticação de administradores.',
    image:
      'https://github.com/user-attachments/assets/28b8d87d-0688-4d9e-8ffe-41972f0e5b29',
    url: 'https://github.com/gabislera/Pizza-shop',
  },
]

export const services = [
  {
    icon: FaGlobe,
    title: 'Websites e Aplicativos',
    description: 'Desenvolvimento de interfaces modernas e responsivas',
  },
  {
    icon: FaDatabase,
    title: 'API e Banco de dados',
    description: 'Criação de serviços de sistema robustos',
  },
  {
    icon: FaCode,
    title: 'DevOps',
    description: 'Deploy e infraestrutura de aplicação',
  },
]
