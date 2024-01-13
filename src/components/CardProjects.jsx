import * as React from 'react'
import { useRef } from 'react';

export default function CardServices(props) {

    const {color, children} = props;

    const cardRef = useRef(null);
    const cardskewRef = useRef(null);
    
    const handleMouseMove = (e) => {
        let cardElem = cardRef.current
        let cardSkElem = cardskewRef.current

        let currCard = cardElem.getBoundingClientRect()
        let currCardSk = cardSkElem.getBoundingClientRect()

        let coords = {
            x: e.clientX - currCard.left,
            y: e.clientY - currCard.top
        }
        let coordsf = {
            x: coords.x - currCardSk.width/2,
            y: coords.y - currCardSk.height/2
        }

        let degx = (coords.y - (currCard.height/2) * 1) / (currCard.height/2)
        let degy = -(coords.x - (currCard.width/2) * 1) / (currCard.width/2)
        
        cardElem.setAttribute("style", `transition: none; transform: perspective(600px) rotateX(${ degx }deg) rotateY(${ degy }deg)`)
        cardSkElem.setAttribute("style", `transform: translate(${ coordsf.x }px, ${ coordsf.y }px)`)
        // cardSkElem.setAttribute("style", `top: ${ coordsf.y }px; left: ${ coordsf.x }px;`)
    }

    const handleMouseOut = (e) => {
        let cardElem = cardRef.current
        cardElem.setAttribute("style", `transition: all .2s; transform: perspective(600px) rotateX(0deg) rotateY(0deg)`)
    }

    return (
        <div className="card-proj" ref={cardRef}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseOut={(e) => handleMouseOut(e)}
        >
            { children }
            { color=="orange" ? 
                <div className="card-skew foco-orange" ref={cardskewRef}></div> :
                <div className="card-skew foco-blue" ref={cardskewRef}></div>
            }
            
        </div>
    );

}