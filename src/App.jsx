import { useState } from 'react'

import './App.css'

import discord from './assets/discord.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

function App() {

  return (
    <>
      <header className='header'>
        <div className='cont-header'>
          <div className='principal'>
            <h2>ludonex</h2>
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

      {/* <h2>LudoNex</h2> */}
    </>
  )
}

export default App
