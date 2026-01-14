import './css/App.css'
import './css/styles'

import github from './assets/github.svg'

import angular from './assets/tecnologics/angular.png'
import aws from './assets/tecnologics/aws.png'
import githubl from './assets/tecnologics/github.png'
import nodejs from './assets/tecnologics/node.png'
import postgre from './assets/tecnologics/postgresql.png'
import react from './assets/tecnologics/react.png'

import cover from './assets/pricing-cover.svg'

import globe from './assets/globe.svg'
import mobile from './assets/mobile.svg'
import cuadros from './assets/cuadros.svg'


import code from './assets/code.svg'
import portfolioPort from './assets/portfolio-portada.png'
import eatyPort from './assets/eaty-portada.png'
import trello from './assets/trello.svg'
import whatsapp from './assets/whatsapp.svg'

import logoyeeshop from './assets/logoyeeshop.jpg'
import logoservicentro from './assets/logoservicentro.jpg'
import logojmteam from './assets/logojmteam.png'
import logomassage from './assets/logomassage.png'


import CardServices from './components/Card/CardServices'
import CardProjects from './components/Card/CardProjects'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormApplication from './components/Form/FormApplication'


function App() {

  return (
    <>
      <Header />
      <main>
        <section className='portada' id='portada'>
          <div className='cont'>
            <div className='titulo'>
              <p>Todo lo que tu negocio necesita en tecnología</p>
              <p className='tbajo'>en un solo lugar</p>
            </div>
            <div className='texto'>
              <p>
                Diseñamos, desarrollamos y mantenemos soluciones digitales
                para emprendedores, empresas y proyectos en crecimiento.
              </p>
            </div>
            <div className='links'>
              <div className='solicita'>
                <p>Crece con nosotros</p>
                <a href='#contactos'>cuéntanos tu idea</a>
              </div>
              <div className='equipo'>
                <p>Transforma tu negocio</p>
                <a href='#contactos'>Ver soluciones</a>
              </div>
            </div>
            {/* <div className='stack'>
              <div className='texto'>
                <p>Mira todo nuestro stack </p>
                <p>tecnologico para el</p>
                <p>desarollo de las apps:</p>
              </div>
      
              <div className='tecnologias'>
                <img src={nodejs} alt="" />
                <img src={react} alt="" />
                <img src={angular} alt="" />
                <img src={postgre} alt="" />
                <img src={aws} alt="" /> 
                <img src={githubl} alt="" />
              </div>
            </div> */}
          </div>
          {/* <img src={cover} className='cover-image' alt="" /> */}
        </section>

        <section className="servicios" id="servicios">
          <div className="titulo">
            <p>Servicios de software</p>
          </div>

          <div className="texto">
            <p>
              Contamos con un portafolio de servicios que nos permite abarcar un mundo de
              retos prometedores.
            </p>
          </div>

          <div className="cards">
            <CardServices>
              <img src={globe} alt="Páginas web profesionales" />
              <p className="card-titulo">Páginas web profesionales.</p>
              <p className="card-info">
                Diseñamos y desarrollamos páginas web claras, modernas y optimizadas para
                que tus clientes te encuentren, confíen en ti y te contacten fácilmente.
              </p>
              <p className="card-micro">
                Web corporativa · Diseño visual · Presencia online
              </p>
            </CardServices>

            <CardServices>
              <img src={cuadros} alt="Landing pages y embudos de venta" />
              <p className="card-titulo">Landing pages y embudos de venta.</p>
              <p className="card-info">
                Creamos landing pages y funnels pensados para captar clientes, generar
                leads y convertir visitas en oportunidades reales para tu negocio.
              </p>
              <p className="card-micro">
                Landing · Funnel · Formularios · Automatización básica
              </p>
            </CardServices>

            <CardServices>
              <img src={mobile} alt="Tiendas online y ventas digitales" />
              <p className="card-titulo">Tiendas online y ventas digitales.</p>
              <p className="card-info">
                Construimos tiendas online para que vendas productos o servicios 24/7,
                con pagos seguros y una experiencia simple para tus clientes.
              </p>
              <p className="card-micro">
                E-commerce · Pagos · Catálogo · POS integrado
              </p>
            </CardServices>

            <CardServices>
              {/* <img src={settings} alt="Sistemas y plataformas empresariales" /> */}
              <img src={cuadros} alt="Landing pages y embudos de venta" />

              <p className="card-titulo">Sistemas y plataformas empresariales.</p>
              <p className="card-info">
                Desarrollamos sistemas a medida para empresas que necesitan controlar
                procesos, clientes, información y operaciones de forma eficiente.
              </p>
              <p className="card-micro">
                B2B · Paneles · Sistemas internos · Integraciones
              </p>
            </CardServices>

            <CardServices>
              {/* <img src={chat} alt="Automatización y chatbots" /> */}
              <img src={cuadros} alt="Landing pages y embudos de venta" />

              <p className="card-titulo">Automatización y chatbots.</p>
              <p className="card-info">
                Automatizamos procesos y atención al cliente mediante chatbots y flujos
                inteligentes que ahorran tiempo y mejoran la comunicación.
              </p>
              <p className="card-micro">
                Chatbots · WhatsApp · Automatización de procesos
              </p>
            </CardServices>

            <CardServices>
              {/* <img src={idea} alt="Soluciones digitales a medida" /> */}
              <img src={cuadros} alt="Landing pages y embudos de venta" />

              <p className="card-titulo">Soluciones digitales a medida.</p>
              <p className="card-info">
                Si tienes una idea específica o un problema particular, diseñamos y
                desarrollamos la solución digital que tu negocio realmente necesita.
              </p>
              <p className="card-micro">
                Apps · Herramientas internas · Integraciones · Escalabilidad
              </p>
            </CardServices>
          </div>
        </section>


        <section className="proyectos" id="proyectos">
          <div className="main">
            <div className="titulo">
              <p>Portafolio</p>
            </div>

            {/* Portafolio: solo logos (empresas / proyectos) */}
            <div className="cards portafolio">
              {/* Reemplaza estos img por tus logos reales */}
              <div className="logo-card">
                {/* <img src={portfolioLogo} alt="Labporfolio.dev" /> */}
                <img src={logoyeeshop} alt="Yeeshop" />
              </div>

              <div className="logo-card">
                <img src={logojmteam} style={{backgroundColor: "#a80000"}} alt="JM Team" />
              </div>

              <div className="logo-card">
                {/* <img src={eatyLogo} alt="Eatydomis.com" /> */}
                <img src={logoservicentro} alt="Servicentro La 70" />
              </div>

              <div className="logo-card">
                <img src={logomassage} style={{backgroundColor: "#a58c64"}} alt="Massage Pro" />
              </div>

              {/* Ejemplos adicionales (opcional) */}
              {/* 
              <div className="logo-card">
                <img src={cliente1} alt="Cliente / Empresa" />
              </div>
              <div className="logo-card">
                <img src={cliente2} alt="Cliente / Empresa" />
              </div> 
              */}
            </div>

            {/* STACKS */}
            <div className="stack">
              <div className="texto">
                <p>Mira todo nuestro stack </p>
                <p>tecnologico para el</p>
                <p>desarollo de las apps:</p>
              </div>

              <div className="tecnologias">
                <img src={nodejs} alt="Node.js" />
                <img src={react} alt="React" />
                <img src={angular} alt="Angular" />
                <img src={postgre} alt="PostgreSQL" />
                <img src={aws} alt="AWS" />
                <img src={githubl} alt="GitHub" />
              </div>
            </div>
          </div>
        </section>


        <section className="contactos" id="contactos">
          <div className="main">
            <div className="info">
              <h3 className="title">¿No sabes por dónde empezar?</h3>

              {/* <p className="scroll">-Scroll-</p> */}

              <p className="message">
                No necesitas tener todo claro. Cuéntanos qué necesitas o qué te gustaría
                lograr y te ayudamos a definir la mejor opción para tu negocio.
              </p>

              <div className="contact-channels">
                <div className="channel">
                  <p>Correo corporativo</p>
                  <a href="mailto:info@ludonex.com">info@ludonex.com</a>
                </div>

                <div className="channel">
                  <p>WhatsApp</p>
                  <a
                    href="https://wa.me/573122968628?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios."
                    target="_blank"
                    rel="noreferrer"
                  >
                    +57 318 723 1122
                  </a>
                </div>
              </div>
            </div>

            <div className="request">
              <FormApplication />
            </div>
          </div>
        </section>


      </main>

      <a href="https://api.whatsapp.com/send/?phone=573238088453&text=Hola, me gustaria obtener más información&type=phone_number&app_absent=0" className="float" target="_blank">
        <img src={whatsapp} alt="" />
      </a>
      <Footer />

    </>
  )
}

export default App
