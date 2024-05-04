import React from 'react'
import './style.css'
import Video from '../../assets/video-trailer.mp4'
import Button from '../button/button';

function Trailer() {
    return (
        <>
        <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer'>
                    <source  src={Video}/>
                    Seu navegador não possui suporte para vídeos
                </video>
                <div id="sinopse">
                <p className="description">
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas produdezas
                    mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                    como a personificação da vingança para a população.
                </p>
            <Button/>
        </div>
            </div>
        </div>
         </>
    )
}

export default Trailer;