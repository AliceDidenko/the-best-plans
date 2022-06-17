import React from 'react'
import './ContentCategory.css'
import Check from '../Check/Check'
import Input from '../Input/Input'
//Number(new Date())

const ContentCategory = ({ doingCategoryList, title, style, onclick, onChangeValueTitle,onChangeValueInput, rank}) => {
    //console.log('render ContentCategory')
    const doingList = doingCategoryList.filter((elem) => elem.category === title)
    const content = doingList[0].doings || []

    const contentElems = content.map( (doing, index) => {
        return <div 
            key = {"C" + rank + "D" + doing.rankImpo}
            className ='doing'
        >
            <Check state={doing.status} onclick={()=>onclick(title, doing.id, index)}/>
            <Input text={doing.name} onChangeValue={onChangeValueInput} name='name' rank={rank} rankD={doing.rankImpo} classes={'input doings'} placeholder={"новое дело"} />
            {doing.status}
        </div>
    })

    //title = (title === '')? 'Дела': title

    return(
        <div className='content contentCategory'>
            <div className='elem contentCategoryTtl' style={style}>
                <Input text={title} onChangeValue={onChangeValueInput} name='category' rank={rank} classes={'input titels'} placeholder={"Заголовок категории"} style={style} />
            </div>
            <div className='elem contentCategoryBox'>{contentElems}</div>
        </div>
    )
}

export default ContentCategory