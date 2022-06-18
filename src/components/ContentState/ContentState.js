import React from 'react'
import './ContentState.css'
import Check from '../Check/Check'
import Input from '../Input/Input'


const ContentState = ({ doingCategoryList, title, status, style,
                        onclick,
                        idSelected,
                        onChangeValueInput,
                        dragStartHandler, 
                        dragEndHandler, 
                        dragLeaveHandler, 
                        dragOverHandler,
                        dragDropHandler}) => {
    const List   = doingCategoryList.map( c => (c.doings || [])).flat().filter(d => Number(d.status) === status/2)
    const sortDoList =  List.sort((a, b) => a.rankState - b.rankState)
    const content = sortDoList.map( (doing, index) => {
        const rank = doingCategoryList.find(c => c.category === doing.category).rank

        return <div 
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
            <div className='rankNumber'>{Number(doing.rankState)+1}.</div>
            <Check state={doing.status} onclick={()=>onclick(doing.category, doing.id, index)}/>
            <Input text={doing.name} onChangeValue={onChangeValueInput} name='name' rank={rank} rankD={doing.rankImpo} classes={'input doings text'} placeholder={"новое дело"} />
            {doing.status}
        </div>
    })


    return(
        <div className='content contentState'>
            <div className='elem contentStateTtl' style={style}><h3>{title}</h3></div>
            <div className='elem contentStateBox'>{content}</div>
        </div>
    )
}


export default ContentState