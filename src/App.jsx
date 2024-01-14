import { useState } from 'react'

import './css/App.css'
import './css/styles'

import logo from './assets/Logo-ludo-4.png'

import discord from './assets/discord.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

import angular from './assets/angular.png'
import aws from './assets/aws.png'
import githubl from './assets/github.png'
import nodejs from './assets/node.png'
import postgre from './assets/postgresql.png'
import react from './assets/react.png'

import cover from './assets/pricing-cover.svg'

import globe from './assets/globe.svg'
import mobile from './assets/mobile.svg'
import cuadros from './assets/cuadros.svg'

import code from './assets/code.svg'
import portfolioPort from './assets/portfolio-portada.png'
import eatyPort from './assets/eaty-portada.png'
import trello from './assets/trello.svg'


import CardServices from './components/CardServices'
import CardProjects from './components/CardProjects'


function App() {

  return (
    <>
      <header className='header'>
        <div className='cont-header'>
          <div className='principal'>
            <div className='logo'>
              <img src={logo} alt="" />
              <h2>LudoNex</h2>
            </div>
            
            <div className='menu'>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Contactos</a></li>
              </ul>
            </div>
          </div>
          
          <div className='redes'>
            <div><img src={discord} /></div>
            <div><img src={github} /></div>
            <div><img src={linkedin} /></div>
          </div>
        </div>
      </header>
      <main>
        <section className='portada'>
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
                <button>Solicitar Aplicacion</button>
              </div>
              <div className='equipo'>
                <p>Aprende con nosotros</p>
                <button>Equipo Ludonex</button>
              </div>
            </div>
            <div className='stack'>
              <div>
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
          <img src={cover} className='cover-image' alt="" />
        </section>

        <section className='servicios'>
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

        <section className='proyectos'>
          <div className='main'>
            <div className='titulo'>
              <p>Proyectos en desarrollo</p>
            </div>
            <div className="cards">
              <CardProjects color={"blue"}>
                <div className='cont'>

                  <div className='pres'>
                    <img className='code' src={code} />
                    <div className='proj'>
                      <h3 className='title'>Labporfolio.dev</h3>
                      <p className='dates aqua'>Enero 2024 - Actualidad</p>

                      <p className='info'>Aplicacion web para desarrollar tu portfolio a base de plantillas
                        personalizables, ademas sera codigo abierto por lo que podras
                        obtener el codigo y modificarlo a tu gusto.
                      </p>
                      <p className='status'><span className='aqua'>En planeacion</span> definiendo la arquitectura de software y 
                        tecnologias a usar para asegurar la escalabilidad del proyecto. 
                      </p>
                      <div className='link'>
                        <a className='github' href="#"><img src={github}/>Repositorio</a>
                        <a className='trello' href="#"><img src={trello}/>Tablero</a>
                      </div>
                    </div>
                  </div>

                  <div className='image-box'>
                    <img src={portfolioPort} alt="" />
                  </div>
                </div>
              </CardProjects>
              <CardProjects color={"orange"}>
                <div className='cont inv'>

                  <div className='image-box'>
                    <img src={eatyPort} alt="" />
                  </div>
                  
                  <div className='pres'>
                    <img className='code' src={code} />
                    <div className='proj'>
                      <h3 className='title'>Eatydomis.com</h3>
                      <p className='dates orange'>Marzo 2024 - Actualidad</p>

                      <p className='info'>Aplicacion web para el crecimiento de pequeños y medianos restaurantes, 
                        ofreciendo marketing, landing page, pos de venta y servicio de domicilios.
                      </p>
                      <p className='status'><span className='orange'>En planeacion</span> acoplando ideas y creando 
                        diagrama de requisitos funcionales. 
                      </p>
                      <div className='link'>
                        <a className='github' href="#"><img src={github}/>Repositorio</a>
                        <a className='trello' href="#"><img src={trello}/>Tablero</a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </CardProjects>
            </div>
          </div>
        </section>

      </main>

    </>
  )
}

export default App
