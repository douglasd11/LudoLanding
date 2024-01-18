import * as React from 'react'

import discord from '../../assets/discord.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import { useState } from 'react'
import clienteAxios from '../../config/axios'
import {useFormValidate} from 'use-form-validate';
import { useRef } from 'react'


export default function FormApplication() {

    const {
        handleSubmit,
        getFieldProps,
        getFieldError,
        removeInput,
    } = useFormValidate();

    const msgRef = useRef(null)

    const onSubmit = (formData) => {

        clienteAxios.post('/solicitud/agregar', formData)
        .then(res => {
            console.log("solicitud enviada")
        })

        let msg = msgRef.current
        msg.setAttribute('style', 'opacity: 1' )

        setTimeout(() =>{
            msg.setAttribute('style', 'opacity: 0; transition: opacity 0.2s ease-in-out;')
        }, 3000)

        removeInput('nombre')
        removeInput('correo')
        removeInput('numero')
        removeInput('asunto')
    };

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h4>Solicitudes y dudas</h4>

            <div className='form-control'>
                <label htmlFor="">Nombre completo</label>
                <input 
                    type="text" 
                    placeholder='Nombre completo' 
                    name='nombre' 
                    {...getFieldProps('nombre', { required: true })}
                />
                <span style={{ color: 'red' }}>{getFieldError('nombre')}</span>
            </div>
            <div className='form-control'>
                <label htmlFor="">Correo electronico</label>
                <input 
                    type="email" 
                    placeholder='Correo electronico' 
                    name='correo' 
                    {...getFieldProps('correo', { required: true, email: true })}
                />
                <span style={{ color: 'red' }}>{getFieldError('correo')}</span>
            </div>
            <div className='form-control'>
                <label htmlFor="">Numero de celular</label>
                <input 
                    type="tel" 
                    placeholder='Numero de celular'
                    name='numero' 
                    {...getFieldProps('numero', { required: true, phone: true })}
                />
                <span style={{ color: 'red' }}>{getFieldError('numero')}</span>
            </div>
            <div className='form-control'>
                <label htmlFor="">Asunto / mensaje</label>
                <input 
                    type="text" 
                    placeholder='Mensaje' 
                    name='asunto' 
                    {...getFieldProps('asunto', { required: true })}
                />
                <span style={{ color: 'red' }}>{getFieldError('asunto')}</span>
            </div>
            <p className='text'>Recuerde llenar todos los campos</p>

            <button type='submit'>
                <p>Enviar</p>
                {/* <img src="" alt="" /> */}
            </button>
            
            <div className='box-msg'>
                <p ref={msgRef}>Gracias por enviar su solicitud, pronto estaremos en contacto.</p>
            </div>
        </form>
    );
}