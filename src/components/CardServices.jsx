import * as React from 'react'
import { useRef } from 'react';

export default function CardServices(props) {

    const {
        children
    } = props;

    const cardRef = useRef(null);
    
    const handleMouseMove = (e) => {
        let cardElem = cardRef.current
        let clientCard = cardElem.getBoundingClientRect()

        let width = clientCard.width
        let height = clientCard.height

        let coordx = e.clientX - clientCard.left
        let coordy = e.clientY - clientCard.top

        let degx = -(coordy-(height/2) * 1)/(height/2)
        let degy = -(coordx-(width/2) * 1)/(width/2)
        
        cardElem.setAttribute("style", `transition: none; transform: perspective(200px) rotateX(${ degx }deg) rotateY(${ degy }deg)`)
    }

    const handleMouseOut = (e) => {
        let cardElem = cardRef.current
        cardElem.setAttribute("style", `transition: all .2s; transform: perspective(200px) rotateX(0deg) rotateY(0deg)`)
    }

    return (
        <div className="card-serv" ref={cardRef}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseOut={(e) => handleMouseOut(e)}>
            { children }
        </div>
    );

}