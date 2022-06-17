import React from 'react'
import './ContentRank.css'
import Check from '../Check/Check'
import Input from '../Input/Input'


const ContentRank = ({  doingCategoryList,
                        idSelected, 
                        style, 
                        onclick, 
                        onChangeValue,
                        dragStartHandler, 
                        dragEndHandler, 
                        dragLeaveHandler, 
                        dragOverHandler,
                        dragDropHandler}) => {
    const List   = doingCategoryList.map( c => (c.doings || [])).flat()
    //console.log(List)
    const sortDoList =  (idSelected === '2' && List.sort((a, b) => a.rankImpo - b.rankImpo))
                    ||  (idSelected === '3' && List.sort((a, b) => a.rankTime - b.rankTime))

    const content = sortDoList.map( (doing, index) => <div 
        key = { idSelected +'_doing' + index + '' }
        className ='doing rank' 
        //onClick = {() => { console.log(index)}}
        draggable={true}
        onDragStart={e => dragStartHandler(e, doing)} // ухватили элемент
        onDragLeave={e => dragLeaveHandler(e)} // за пределы другого элемента
        onDragEnd={e =>  dragEndHandler(e)} // отпустили
        onDragOver={e =>  dragOverHandler(e)} // над другим элементом
        onDrop={e =>  dragDropHandler(e, doing, idSelected)} // отпустили и расчитываем на событие
    >
        <div className='rankNumber'>{idSelected === '2'? Number(doing.rankImpo)+1: Number(doing.rankTime)+1}.</div>
        <Check state={doing.status} onclick={()=>onclick(doing.category, doing.id, index)}/>
        <div className='text'>{doing.name}, {Number(doing.rankImpo)+1}</div>
    </div>
    )

    const title = idSelected === '2'? 'Дела по важности': 'Дела по срочности'

    return(
        <div className='content contentRank'>
            <div className='elem contentCategoryTtl' style={style}>
                <h3>{title}</h3>
            </div>
            <div className='elem contentCategoryBox'>{content}</div>
        </div>
    )
}

export default ContentRank

/*

*/