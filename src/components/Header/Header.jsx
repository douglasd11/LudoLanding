import * as React from 'react'
import { useState, useEffect } from 'react'
import { useRef } from 'react'

import clienteAxios from '../../config/axios'

import logo from '../../assets/Logo-ludo-5.png'

import discord from '../../assets/discord.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

import bars_solid from '../../assets/bars-solid.svg'


export default function Header(props) {

    const menuRef = useRef(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        clienteAxios.get('/active')
        .then(res => {
            console.log(res.data)
        })
    }, [])
    

    const handleMenuBar = () => {
        let menubar = menuRef.current

        document.body.setAttribute('style',  (open ? 'overflow: hidden' : 'overflow: auto'))
        menubar.setAttribute('style', (open ? 'left: 0; opacity: 1' : 'left: -100%; opacity: 0') )
        setOpen(!open)
    }

    const handleMenuLink = () => {
        let menubar = menuRef.current

        if(!open){
            document.body.setAttribute('style',  (open ? 'overflow: hidden' : 'overflow: auto'))
            menubar.setAttribute('style', (open ? 'left: 0; opacity: 1' : 'left: -100%; opacity: 0') )
            setOpen(!open)
        }
        
    }

    return (
        <header className='header' id='#inicio'>
            <div className='cont-header'>
                <div className='principal'>
                    <div className='logo'>
                    <img src={logo} alt="" />
                    <h2>LudoNex</h2>
                    </div>
                    
                    <div className='menu'>
                        <ul ref={menuRef}>
                            <li><a href="#inicio" onClick={handleMenuLink}>Inicio</a></li>
                            <li><a href="#servicios" onClick={handleMenuLink}>Servicios</a></li>
                            <li><a href="#proyectos" onClick={handleMenuLink}>Proyectos</a></li>
                            <li><a href="#contactos" onClick={handleMenuLink}>Contactos</a></li>
                            <li>
                                <div className='redes'>
                                    <div><img src={discord} /></div>
                                    <div><img src={github} /></div>
                                    <div><img src={linkedin} /></div>
                                </div>
                            </li>
                        </ul>
                        <div className='redes'>
                            <div><img src={discord} /></div>
                            <div><img src={github} /></div>
                            <div><img src={linkedin} /></div>
                        </div>
                    </div>
                </div>
                
                <div className='bars'>
                    <button className='btn-bars' onClick={handleMenuBar}>
                        <img src={bars_solid} alt="" />
                    </button>
                </div>
                
            </div>
        </header>
    );
}