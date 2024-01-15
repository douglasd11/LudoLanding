import * as React from 'react'

import logo from '../../assets/Logo-ludo-4.png'

import discord from '../../assets/discord.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Header(props) {

    return (
        <header className='header' id='#inicio'>
            <div className='cont-header'>
            <div className='principal'>
                <div className='logo'>
                <img src={logo} alt="" />
                <h2>LudoNex</h2>
                </div>
                
                <div className='menu'>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contactos">Contactos</a></li>
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
    );
}