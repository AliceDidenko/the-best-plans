import React from 'react'
import './ContentCategory.css'
import Check from '../Check/Check'
import Input from '../Input/Input'
//Number(new Date())

const ContentCategory = ({ doingCategoryList, title, style, onclickState, onclickDelete, onclickCreate,onChangeValueInput, rank}) => {
    //console.log('render ContentCategory')
    const doingList = doingCategoryList.filter((elem) => elem.category === title)
    const content = doingList[0].doings || []
    const contentElems = content.map( (doing, index) => {
        return <div 
            key = {"C" + rank + "D" + doing.rankImpo}
            className ='doing'
        >
            <Check typeCheck='state' state={doing.status} onclick={()=>onclickState(title, doing.id, index)}/>
            <Input text={doing.name} onChangeValue={onChangeValueInput} name='name' rank={rank} rankD={doing.rankImpo} classes={'input doings'} placeholder={"новое дело"} />
            <Check typeCheck='deleteDoing' onclick={()=>onclickDelete('doing', doing.rankImpo)}/>
        </div>
    })



    const List   = doingCategoryList.map( c => (c.doings || [])).flat()
    const endRankList = List.length
    const endRankCateg = List.filter(d => d.category === title).length
    const endRankState = List.filter(d => d.status === '0').length
    const newDo = {
        id: 'id'+ endRankList,
        name: '',
        category: title,
        rankImpo: endRankList,
        rankTime:  endRankList,
        rankState: endRankState,
        rankCateg: endRankCateg,
        status: '0'
    }

    const newElems = <div 
        key = {"C" + rank + "D" + newDo.rankImpo}
        className ='doing newElems'
    >
        <Check typeCheck='addElems' state={newDo.status} onclick={()=>onclickCreate(title, newDo.id, newDo)}/>
        <Input text={newDo.name} onChangeValue={onChangeValueInput} name='name' rank={rank} rankD={newDo.rankImpo} classes={'input doings addDoing'} placeholder={"новое дело"} />
    </div>

    //title = (title === '')? 'Дела': title

    return(
        <div className='content contentCategory'>
            <div className='elem contentCategoryTtl' style={style}>
                <Input text={title} onChangeValue={onChangeValueInput} name='category' rank={rank} classes={'input titels'} placeholder={"Категория"} style={style} />
                <Check typeCheck='deleteTitle' onclick={()=>onclickDelete('category', rank)}/>
            </div>
            <div className='elem contentCategoryBox'>
                {contentElems}
                {newElems}
            </div>
        </div>
    )
}

export default ContentCategory