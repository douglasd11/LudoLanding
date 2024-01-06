import { useState } from 'react'

import './css/App.css'
import './css/styles'

import logo from './assets/Logo-ludo.png'

import discord from './assets/discord.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

import angular from './assets/angular.png'
import aws from './assets/aws.png'
import githubl from './assets/github.png'
import nodejs from './assets/node.png'
import postgre from './assets/postgresql.png'
import react from './assets/react.png'

import CardServices from './components/CardServices'


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
        </section>

        <section className='servicios'>
          <div className='titulo'>
            <p>Explora los servicios ofrecidos</p>
          </div>
          <div className='cards'>
            <CardServices>
              <p className='card-titulo'>Sitio web</p>
              <p className='card-info'>Atrae a tus posibles compradores, ofréceles una experiencia única, con una apariencia profesional y con mucho estilo.</p>
            </CardServices>
            <CardServices>
              <p className='card-titulo'>E-commerce</p>
              <p className='card-info'>Tus clientes entrarán a una tienda en línea de primer nivel donde comprarán tus productos/servicios de manera fácil y rápida.</p>
            </CardServices>
            <CardServices>
              <p className='card-titulo'>Aplicacion movil</p>
              <p className='card-info'>Tu aplicación móvil con el máximo nivel de calidad posible utilizando todos los sensores y prestaciones de los dispositivos móviles al máximo.</p>
            </CardServices>
          </div>
        </section>

      </main>

      {/* <h2>LudoNex</h2> */}
    </>
  )
}

export default App
