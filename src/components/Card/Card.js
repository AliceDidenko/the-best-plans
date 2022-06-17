import React from 'react'
import './Card.css'

const Card = (props) => {
    let body
    if (props.draggable) { 
        body = <div className='card' draggable={props.draggable}
            onDragStart={e => props.dragStartHandler(e, props.card)} // ухватили элемент
            onDragLeave={e => props.dragLeaveHandler(e)} // за пределы другого элемента
            onDragEnd={e =>  props.dragEndHandler(e, props.card)} // отпустили
            onDragOver={e => props.dragOverHandler(e)} // над другим элементом
            onDrop={e =>  props.dragDropHandler(e, props.card)} // отпустили и расчитываем на событие
            >
                {props.children}
        </div>
    } else {
        body = <div className='card' draggable={props.draggable}>
            {props.children}
        </div>
    }
        
    return(<>{body}</>)
}

export default Card