import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src = {url} alt = {title}></img>
            <p className='TituloGifs'>{title}</p>
        </div>
    )
}
