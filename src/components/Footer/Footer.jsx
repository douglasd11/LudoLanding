import * as React from 'react'

import discord from '../../assets/discord.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Footer(props) {

    return (
        <footer className='footer'>
            <div className='cont-footer'>
                <div>
                    <p>© 2024 LudoNex, Inc</p>
                </div>
                <div className='redes'>
                    <img src={discord} alt="" />
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </footer>
    );
}