import React from 'react'
import './ContentState.css'
import Check from '../Check/Check'


const ContentState = ({ doingCategoryList, title, status, style,
                        onclick,
                        idSelected,
                        dragStartHandler, 
                        dragEndHandler, 
                        dragLeaveHandler, 
                        dragOverHandler,
                        dragDropHandler}) => {
    const List   = doingCategoryList.map( c => (c.doings || [])).flat()

    const content = List.filter(d => Number(d.status) === status/2).map( (doing, index) => <div 
        key = { title +'_doing' + index + '' }
        className ='doing state' 
        //onClick = {() => { console.log(index)}}
        draggable={true}
        onDragStart={e => dragStartHandler(e, doing)} // ухватили элемент
        onDragLeave={e => dragLeaveHandler(e)} // за пределы другого элемента
        onDragEnd={e =>  dragEndHandler(e, doing)} // отпустили
        //onDragOver={e =>  dragOverHandler(e)} // над другим элементом
        //onDrop={e =>  dragDropHandler(e)} // отпустили и расчитываем на событие
    >
        <div className='rankNumber'>{index+1}.</div>
        <Check state={doing.status} onclick={()=>onclick(doing.category, doing.id, index)}/>
        <div className='text'>{doing.name}, {doing.status}</div>
    </div>)


    return(
        <div className='content contentState'>
            <div className='elem contentStateTtl' style={style}><h3>{title}</h3></div>
            <div className='elem contentStateBox'>{content}</div>
        </div>
    )
}


export default ContentState