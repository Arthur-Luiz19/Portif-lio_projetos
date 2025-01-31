import { useState, useEffect } from 'react';
import './App.css'
import Foto from '../imagens/file.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div>
      <header id='home' className='bg-gray-400 text-white text-center py-4'>
        <nav className='container mx-auto flex justify-between items-center'>
          <a href="#" className='text-2xl font-bold text-white ml-3'>Meu portifólio</a>

          <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-white'>
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <ul className={`md:flex space-x-1 text-white ${menuOpen ? "block" : "hidden"} md:block`}>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 py-1 text-lg'>
              <a href="#home" className=''>Home</a>
            </li>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 py-1 text-lg'>
              <a href="#sobreMim" className=''>Sobre mim</a>
            </li>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 py-1 text-lg'>
              <a href="#projetos" className=''>Projetos</a>
            </li>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 py-1 text-lg'>
              <a href="" className=''>Contatos</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className='h-[100vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-300 to-white'>
        <h1 className='text-6xl font-bold font-serif shadow-[15px_10px_15px_rgba(0,0,0,0.5)] px-4 mb-5'>Arthur Luiz da Silva</h1>
        <h1 className='text-4xl font-bold font-serif shadow-[15px_10px_15px_rgba(0,0,0,0.5)] px-4'>Desenvolvedor Fullstack</h1>
      </section>

      <section id='sobreMim' className='h-[100vh] bg-white mb-[350px] md:mb-[250px] lg:mb-0'>

        <div className='text-5xl text-gray-800 font-black pl-3 pt-4'>
          <h1>Sobre mim</h1>
        </div>

        <div className='grid grid-cols-2 mt-20 gap-6 lg:grid-cols-12 md:gap-0'>
          <div className='col-span-5 mb-3 md:mb-8 lg:mb-0'>
            <img className='rounded-[400px] place-self-start justify-self-center shadow-[15px_15px_15px_rgba(0,0,0,0.5)]' src={Foto} alt="" width={300} />
          </div>

          <div className='col-span-1 bg-gray-900 w-[2px] h-[80%] place-self-center justify-self-center hidden md:block'></div>
          <div className='col-span-6 justify-self-center pr-3 pl-4 lg:pl-0'>
            <p>
              Sou desenvolvedor full stack apaixonado por transformar ideias em experiências digitais fluidas e impactantes. Trabalho com uma stack completa para o desenvolvimento web, garantindo performance, escalabilidade e usabilidade em cada projeto.
              <br /><br />
            
              Minha Stack: 
              <br />
            
              <span className='block'> <strong>Frontend:</strong> React.js, Tailwind CSS, TypeScript;</span>
              <span className='block'> <strong>Backend:</strong> Node.js, Express, NestJS;</span>
              <span className='block'> <strong>Banco de Dados:</strong> PostgreSQL, MySQL, SQLite;</span>
              <span className='block'> <strong>Autenticação & Segurança:</strong> JWT, bcrypt;</span>
              <span className='block'> <strong>DevOps & Infra:</strong> Docker;</span>
              <span className='block'> <strong>Ferramentas & Versionamento:</strong> Git, GitHub;</span><br />
            
              Minha trajetória começou nos games, onde aprendi a estruturar sistemas eficientes e otimizados. Essa experiência me deu uma visão estratégica no desenvolvimento web, garantindo que cada aplicação seja rápida, funcional e envolvente.
              Seja construindo uma API robusta, um site interativo ou um sistema dinâmico, o que me motiva é criar soluções que realmente entregam valor.
            </p>
          </div>
        </div>
      </section>

      <section className='h-[100vh] bg-gradient-to-b from-white to-gray-300'>
        <div className='text-5xl text-gray-800 font-black pl-3 pt-4'>
          <h1 id='projetos' className='mb-8'>Projetos</h1>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <h2>card</h2>
              <p>parahrado</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <h2>card</h2>
              <p>parahrado</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <h2>card</h2>
              <p>parahrado</p>
            </div>
        </div>
        
      </section>

    </div>
  )
}

export default App