import { useState, useEffect } from 'react';
import './App.css'
import Foto from '../imagens/file.png'
import cadastroPedidos from '../imagens/Cadastro-de-pedidos.jpg';
import cadastroUsuario from '../imagens/Cadastro-de-usuario.png';
import registroUsuario from '../imagens/lista-de-usuarios.png';
import gerenciarTarefas from '../imagens/gerenciador-de-Tarefas.png';
import linkedinClaro from '../imagens/linkedin-claro.png';
import linkedinEscuro from '../imagens/linkedin-escuro.png';
import emailClaro from '../imagens/email-claro.png';
import emailEscuro from '../imagens/email-escuro.png';
import githubClaro from '../imagens/github-claro.png';
import githubEscuro from '../imagens/github-escuro.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModoEscuro, setIsModoEscuro] = useState(false);

  function modoNoturno(){
    setIsModoEscuro(!isModoEscuro);
  }

  return (
    <div>
      <header id='home' className={`${isModoEscuro ? 'bg-blue-900':'bg-blue-500 text-white'} text-center py-4`}>
        <nav className={`px-4 h-20 top-0 mx-auto ${isModoEscuro ? 'bg-blue-900' : 'bg-blue-500 text-white'} flex justify-between items-center fixed w-full z-50`}>
          <a href="#" className='text-3xl font-bold font-sans text-white ml-3'>Meu portifólio</a>

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
          <ul className={`md:flex md:static text-white ${isModoEscuro ? 'bg-blue-900' : 'bg-blue-500'}  ${menuOpen ? "flex w-50 h-80 bg-blue-500 flex-col items-center pt-32 space-y-2" : "hidden"} md:block`}>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 flex items-center text-xl'>
              <a href="#home" className=''>Home</a>
            </li>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 flex items-center text-xl'>
              <a href="#sobreMim" className=''>Sobre mim</a>
            </li>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 flex items-center text-xl'>
              <a href="#projetos" className=''>Projetos</a>
            </li>
            <li className='hover:text-black hover:bg-white hover:rounded-sm transition-all duration-300 ease-in-out ml-4 px-2 flex items-center text-xl'>
              <a href="#contatos" className=''>Contatos</a>
            </li>
            <div className='h-10 w-20 bg-gray-500 rounded-4xl flex ml-4'>
            <button onClick={modoNoturno} className={`flex justify-center ${isModoEscuro ? 'translate-x-5' : 'translate-x-[-20px]'} transition-all duration-300 ease-in-out`}>
              <div className={`w-11 h-11 rounded-full ${isModoEscuro ? 'bg-gray-800 text-white' : 'bg-white text-black'}  text-center text-xl ml-5 flex justify-center items-center`}>{isModoEscuro ? "DRK" : "LHT"}</div>
            </button>
            </div>
          </ul>
        </nav>
      </header>

      <section className={`h-[100vh] flex flex-col justify-center items-center bg-gradient-to-b ${isModoEscuro ? 'from-blue-900 to-[#101820]' : 'from-blue-500 to-yellow-200'} `}>
        <h1 className={` text-4xl lg:text-6xl font-bold font-serif ${isModoEscuro ? 'text-[#F8F8F8]' : ''} shadow-[15px_10px_15px_rgba(0,0,0,0.5)] px-4 mb-5`}>Arthur Luiz da Silva</h1>
        <h1 className={`text-2xl lg:text-4xl font-bold font-serif ${isModoEscuro ? 'text-[#F8F8F8]' : ''} shadow-[15px_10px_15px_rgba(0,0,0,0.5)] px-4`}>Desenvolvedor Fullstack</h1>
      </section>

      <section id='sobreMim' className={`${isModoEscuro ? 'bg-[#101820]' : 'bg-yellow-200' } min-h-screen mb-0`}>
        <div className={`text-5xl ${isModoEscuro ? 'text-[#F8F8F8]' : 'text-gray-800' } font-black pl-3 pt-4`}>
          <h1>Sobre mim</h1>
        </div>

        <div className='grid grid-cols-2 mt-20 gap-y-4 py-10 lg:grid-cols-12 md:gap-0'>
          <div className='col-span-5 mb-3 md:mb-8 lg:mb-0'>
            <img className='rounded-[400px] place-self-start justify-self-center shadow-[15px_15px_15px_rgba(0,0,0,0.5)]' src={Foto} alt="" width={300} />
          </div>

          <div className={`col-span-1 ${isModoEscuro ? 'bg-[#F8F8F8]' : 'bg-gray-900' } w-[2px] h-[80%] place-self-center justify-self-center hidden md:block`}></div>
          <div className='col-span-6 justify-self-center pr-3 pl-4 lg:pl-0'>
            <p className={`text-lg ${isModoEscuro ? 'text-[#F8F8F8]' : '' }`}>
              Sou desenvolvedor full stack apaixonado por transformar ideias em experiências digitais fluidas e impactantes. Trabalho com uma stack completa para o desenvolvimento web, garantindo performance, escalabilidade e usabilidade em cada projeto.
              <br /><br />

              Minha Stack:
              <br />
              <div className='grid grid-cols-2 my-5'>
                <span className='border-1 rounded-4xl p-3 my-2 mr-2'> <strong>Frontend:</strong> React.js, Tailwind CSS, TypeScript;</span>
                <span className='border-1 rounded-4xl p-3 my-2 ml-2'> <strong>Backend:</strong> Node.js, Express, NestJS;</span>
                <span className='border-1 rounded-4xl p-3 my-2 mr-2'> <strong>Banco de Dados:</strong> PostgreSQL, MySQL, SQLite;</span>
                <span className='border-1 rounded-4xl p-3 my-2 ml-2'> <strong>Autenticação & Segurança:</strong> JWT, bcrypt;</span>
                <span className='border-1 rounded-4xl p-3 my-2 mr-2'> <strong>DevOps & Infra:</strong> Docker;</span>
                <span className='border-1 rounded-4xl p-3 my-2 ml-2'> <strong>Ferramentas & Versionamento:</strong> Git, GitHub;</span>
              </div>

              Minha trajetória começou nos games, onde aprendi a estruturar sistemas eficientes e otimizados. Essa experiência me deu uma visão estratégica no desenvolvimento web, garantindo que cada aplicação seja rápida, funcional e envolvente.
              Seja construindo uma API robusta, um site interativo ou um sistema dinâmico, o que me motiva é criar soluções que realmente entregam valor.
            </p>
          </div>
        </div>
      </section>

      <section className={`h-full lg:h-full bg-gradient-to-b ${isModoEscuro ? 'from-[#101820] to-blue-900' : 'from-yellow-200 to-blue-500' } `}>
        <div className={`text-5xl ${isModoEscuro ? 'text-[#F8F8F8]' : 'text-gray-800' } font-black pl-3 pt-4`}>
          <h1 id='projetos' className='mt-10'>Projetos</h1>
        </div>

        <div className='grid grid-cols-1 py-20 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pl-20'>

          {/* Card #1 */}
          <div className='bg-yellow-300 min-h-[500px] rounded-4xl shadow-lg shadow-gray-800 hover:scale-105 hover:shadow-[15px_10px_15px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out w-[80%] sm:w-[60%] md:w-[50%] lg:w-[80%] my-5 xl:my-0'>
            <div className='p-3'>
              <h2 className='text-2xl font-serif text-center my-2 '>Tela de cadastro com JWT</h2>
              <img className='rounded-2xl justify-self-center pb-3 ' src={registroUsuario} alt="" />
            </div>
            <div className='bg-white min-h-[390px] rounded-4xl px-4 py-3 '>
              <p className=''>
                Este projeto foi desenvolvido para registrar usuários, armazenando nome, e-mail e senha com segurança. A senha é criptografada usando bcrypt, e um token JWT é gerado para autenticação. No login, o token é validado e, se correto, o usuário é redirecionado para a tela de registros. No frontend, foram criadas páginas de cadastro, login e listagem de registros, todas estilizadas e organizadas para uma melhor experiência do usuário.
                <span className='block pt-3 mb-5'><strong>Tecnologias usadas:</strong> React, CSS, Javascript, node.js, Express, Sequelize e MySQL </span>
              </p>
            </div>
          </div>

          {/* Card #2 */}
          <div className='bg-yellow-300 rounded-4xl shadow-lg shadow-gray-800 hover:scale-105 hover:shadow-[0px_20px_15px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out w-[80%] sm:w-[60%] md:w-[50%] lg:w-[80%] my-5 xl:my-0'>
            <div className='p-3'>
              <h2 className='text-2xl font-serif text-center my-2'>Gerenciamento de tarefas</h2>
              <img className='rounded-xl justify-self-center pb-2' src={gerenciarTarefas} alt="" />
            </div>
            <div className='bg-white rounded-4xl px-4 py-3 rounded-b-4xl min-h-[385px]'>
              <p>Desenvolvi uma API de gerenciamento de tarefas para auxiliar os usuários em suas atividades diárias, oferecendo funcionalidades como CRUD e a opção de marcar tarefas como concluídas. No frontend, criei uma página para consumir a API, implementei um sistema de alternância entre modo claro e escuro e adicionei animações para a criação e exclusão de tarefas, proporcionando uma experiência mais dinâmica e interativa.
                <span className='block pt-2'><strong>Tecnologias usadas:</strong> React, TailwindCSS, Javascript, node.js, Express, Sequelize e MySQL </span>
              </p>
            </div>
          </div>

          {/* Card #3 */}
          <div className='bg-yellow-300 rounded-4xl shadow-lg shadow-gray-800 hover:scale-105 hover:shadow-[-15px_10px_15px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out w-[80%] sm:w-[60%] md:w-[50%] lg:w-[80%] my-5 md:my-25 lg:my-5 xl:my-0'>
            <div className='p-3'>
              <h2 className='text-2xl font-serif text-center my-2'>Cadastro de Pedidos</h2>
              <img className='rounded-xl justify-self-center pb-3' src={cadastroPedidos} alt="" width={600} />
            </div>
            <div className='bg-white rounded-4xl px-4 py-3 pb-6 rounded-b-4xl'>
              <p>Desenvolvi uma API para gerenciamento de pedidos de restaurante utilizando o padrão de arquitetura MVC, permitindo que os clientes realizem pedidos digitalmente, sem precisar de um garçom. O sistema registra o nome do cliente, os itens escolhidos e o total de pratos, facilitando a organização e o acompanhamento dos pedidos. O frontend oferece uma interface intuitiva, exibindo a lista de pedidos e um formulário para novas solicitações.
                <span className='block pt-5'><strong>Tecnologias usadas:</strong> Javascript, Bootstrap, node.js, Express, Sequelize e MySQL </span>
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id='contatos' className={`h-[100%] bg-gradient-to-b ${isModoEscuro ? 'from-blue-900 to-[#B8C7D1]' : 'from-blue-500 to-blue-950' }`}>
        <div className='text-5xl text-gray-800 font-black pl-3 pt-4'>
          <h1 id='projetos' className='mb-8 text-white'>Contatos</h1>
        </div>

        <h2 className='text-3xl text-center text-white mt-10'>Entre em contato comigo!</h2>
        <div className='py-30 flex justify-center'>
          <a className='rounded-2xl hover:shadow-[15px_15px_15px_rgba(0,0,0,0.5)] hover:scale-150 transition-all duration-300 ease-in-out' href="https://www.linkedin.com/in/arthur-luiz-da-silva/" target='_blank'><img src={isModoEscuro? linkedinClaro :linkedinEscuro} alt="" width={70} /></a>
          <a className='mx-30 rounded-2xl hover:shadow-[0px_20px_15px_rgba(0,0,0,0.5)] hover:scale-150 transition-all duration-300 ease-in-out' href="https://github.com/Arthur-Luiz19" target='_blank'><img src={isModoEscuro ? githubClaro :githubEscuro} alt="" width={70} /></a>
          <a className='rounded-2xl hover:shadow-[-15px_10px_15px_rgba(0,0,0,0.5)] hover:scale-150 transition-all duration-300 ease-in-out' href="https://outlook.live.com/mail/0/deeplink/compose?to=arthur.luiz11@hotmail.com" target='_blank'> <img src={isModoEscuro ? emailClaro :emailEscuro} alt="" width={70} /></a>
        </div>
      </section>

    </div>
  )
}

export default App