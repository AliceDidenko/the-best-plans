import React from 'react'
import './ContentRank.css'
import Check from '../Check/Check'


const ContentRank = ({  doList, 
                        idSelected, 
                        style, 
                        onclick, 
                        dragStartHandler, 
                        dragEndHandler, 
                        dragLeaveHandler, 
                        dragOverHandler,
                        dragDropHandler}) => {
    const sortDoList =  (idSelected === '2' && doList.sort((a, b) => a.rankImpo - b.rankImpo))
                    ||  (idSelected === '3' && doList.sort((a, b) => a.rankTime - b.rankTime))

    const content = sortDoList.map( (doing, index) => <div 
        key = { idSelected +'_doing' + index + '' }
        className ='doing rank' 
        //onClick = {() => { console.log(index)}}
        draggable={true}
        onDragStart={e => dragStartHandler(e, doing)} // ухватили элемент
        onDragLeave={e => dragLeaveHandler(e)} // за пределы другого элемента
        onDragEnd={e =>  dragEndHandler(e, doing)} // отпустили
        //onDragOver={e =>  dragOverHandler(e)} // над другим элементом
        //onDrop={e =>  dragDropHandler(e)} // отпустили и расчитываем на событие
    >
        <div className='rankNumber'>{idSelected === '2'? doing.rankImpo: doing.rankTime}.</div>
        <Check state={doing.status} onclick={()=>onclick(doing.id, index)}/>
        <div className='text'>{doing.name}, {doing.status}</div>
    </div>
    )

    const title = idSelected === '2'? 'Дела по важности': 'Дела по срочности'

    return(
        <div className='content contentRank'>
            <div className='elem contentCategoryTtl' style={style}><h3>{title}</h3></div>
            <div className='elem contentCategoryBox'>{content}</div>
        </div>
    )
}

export default ContentRank

/*

*/