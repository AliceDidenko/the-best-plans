import React from 'react'
import './ContentCategory.css'
import Check from '../Check/Check'


const ContentCategory = ({doList, title='Дела', style, onclick}) => {
    //console.log('render ContentCategory')
    const content = doList.filter((elem) => elem.category === title)
    const contentElems = content.map( (doing, index) =>
        <div 
            key = { doing.name + '_in_' + title }
            className ='doing' 
            onClick = {() => { console.log(index)}}
        >
            <Check state={doing.status} onclick={()=>onclick(doing.id, index)}/>
            {doing.name}, {doing.status}
        </div>
    )

    title = (title === '')? 'Дела': title

    return(
        <div className='content contentCategory'>
            <div className='elem contentCategoryTtl' style={style}><h3>{title}</h3></div>
            <div className='elem contentCategoryBox'>{contentElems}</div>
        </div>
    )
}

export default ContentCategory