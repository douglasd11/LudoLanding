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


import CardServices from './components/Card/CardServices'
import CardProjects from './components/Card/CardProjects'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormApplication from './components/Form/FormApplication'


function App() {

  return (
    <>
      <Header/>
      <main>
        <section className='portada' id='portada'>
          <div className='cont'>
            <div className='titulo'>
              <p>Desarrollo de software para ti</p>
              <p className='tbajo'>para todos</p>
            </div>
            <div className='texto'>
              <p>LudoNex construye aplicaciones a la medida creamos blogs, landing, ecommerce y mas.</p>
            </div>
            <div className='links'>
              <div className='solicita'>
                <p>Crece con nosotros</p>
                <a href='#contactos'>Solicitar Aplicacion</a>
              </div>
              <div className='equipo'>
                <p>Aprende con nosotros</p>
                <a href='#contactos'>Equipo Ludonex</a>
              </div>
            </div>
            <div className='stack'>
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
            </div>
          </div>
          {/* <img src={cover} className='cover-image' alt="" /> */}
        </section>

        <section className='servicios' id='servicios'>
          <div className='titulo'>
            <p>Servicios de software</p>
          </div>
          <div className='texto'>
            <p>Contamos con un portafolio de servicios que nos permite abarcar un mundo de retos prometedores.</p>
          </div>
          <div className='cards'>
            <CardServices>
              <img src={globe} alt="" />
              <p className='card-titulo'>Sitio web</p>
              <p className='card-info'>Atrae a tus posibles compradores, ofréceles una experiencia única, con una apariencia profesional y con mucho estilo.</p>
            </CardServices>
            <CardServices>
              <img src={cuadros} alt="" />
              <p className='card-titulo'>E-commerce</p>
              <p className='card-info'>Tus clientes entrarán a una tienda en línea de primer nivel donde comprarán tus productos/servicios de manera fácil y rápida.</p>
            </CardServices>
            <CardServices>
              <img src={mobile} alt="" />
              <p className='card-titulo'>Aplicacion movil</p>
              <p className='card-info'>Tu aplicación móvil con el máximo nivel de calidad posible utilizando todos los sensores y prestaciones de los dispositivos móviles al máximo.</p>
            </CardServices>
          </div>
        </section>

        <section className='proyectos' id='proyectos'>
          <div className='main'>
            <div className='titulo'>
              <p>Proyectos en desarrollo</p>
            </div>
            <div className="cards">
              <CardProjects color={"blue"}>
                <div className='cont'>
                  
                  <div className='box'>
                    <div className='pres'>
                      <img className='code' src={code} />
                      <div className='proj'>
                        <h3 className='title'>Labporfolio.dev</h3>
                        
                        <p className='dates aqua'>Enero 2024 - Actualidad</p>

                        <p className='info'>Aplicacion web para desarrollar tu portfolio a base de plantillas
                          personalizables, ademas sera codigo abierto por lo que podras
                          obtener el codigo y modificarlo a tu gusto.
                        </p>
                        {/* <p className='status'><span className='aqua'>En planeacion</span> definiendo la arquitectura de software y 
                          tecnologias a usar para asegurar la escalabilidad del proyecto. 
                        </p> */}
                        <div className='link'>
                          <a className='github disable'><img src={github}/>Repositorio</a>
                          <a className='trello' href="https://trello.com/b/gzlep3oZ/labportfolio" target='_blank'>
                            <img src={trello}/>
                            Tablero
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='image-box'>
                    <img src={portfolioPort} alt="" />
                  </div>
                </div>
              </CardProjects>
              <CardProjects color={"blue"}>
                <div className='cont inv'>

                  <div className='image-box'>
                    <img src={eatyPort} alt="" />
                  </div>
                  
                  <div className="box">
                    <div className='pres'>
                      <img className='code' src={code} />
                      <div className='proj'>
                        <h3 className='title'>Eatydomis.com</h3>

                        <p className='dates aqua'>Marzo 2024 - Actualidad</p>

                        <p className='info'>Aplicacion web para el crecimiento de pequeños y medianos restaurantes, 
                          ofreciendo marketing, landing page, pos de venta y servicio de domicilios.
                        </p>
                        {/* <p className='status'><span className='aqua'>En planeacion</span> acoplando ideas y creando 
                          diagrama de requisitos funcionales. 
                        </p> */}
                        <div className='link'>
                          <a className='github disable'><img src={github}/>Repositorio</a>
                          <a className='trello' href="https://trello.com/b/tx57Eyd2/eatydomis" target='_blank'>
                            <img src={trello}/>
                            Tablero
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </CardProjects>
            </div>
          </div>
        </section>

        <section className='contactos' id='contactos'>
          <div className='main'>

            <div className='info'>
              <h3 className='title'>Cuentanos como podemos ayudarte.</h3>
              <p className='message'>Cada minuto es una oportunidad y cuanto más compartas tu trabajo e inspires a tu alrededor, más puertas se abrirán para ti.</p>
              <div className='person'>
                <p>Luis Miguel Espitaleta</p>
                <span>Gestor de proyectos</span>
              </div>
              <div className='email'>
                <p>Escríbenos</p>
                <span>lumiesal@gmail.com</span>
              </div>
            </div>

            <div className='request'>
              <FormApplication/>
            </div>

          </div>
        </section>

      </main>

      <a href="https://api.whatsapp.com/send/?phone=573238088453&text=Hola, me gustaria obtener más información&type=phone_number&app_absent=0" className="float" target="_blank">
        <img src={whatsapp} alt="" />
      </a>
      <Footer/>

    </>
  )
}

export default App
