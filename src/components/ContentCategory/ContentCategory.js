import React, {useState} from 'react'
import './ContentCategory.css'
import Check from '../Check/Check'
import Input from '../Input/Input'
import PaletButton from '../PaletButton/PaletButton'
import Palette from '../Palette/Palette'
//Number(new Date())

const ContentCategory = ({  doingCategoryList, title, onclickColor, style, 
                            onclickState, onclickDelete, onclickCreate,onChangeValueInput, rank}) => {
    //console.log('render ContentCategory')
    const doingList = doingCategoryList.filter((elem) => elem.category === title)
    const content = doingList[0].doings || []
    const contentElems = content.map( (doing, index) => {
        return <div 
            key = {"C" + rank + "D" + doing.rankImpo}
            className ='doing'
        >
            <Check typeCheck='state' state={doing.status} onclick={()=>onclickState(title, doing.id, index)}/>
            <Input text={doing.name} onChangeValue={e=>onChangeValueInput(e, rank, doing.rankImpo)} name='name' rank={rank} rankD={doing.rankImpo} classes={'input doings'} placeholder={"новое дело"} />
            <Check typeCheck='deleteDoing' onclick={()=>onclickDelete('doing', doing.rankImpo)}/>
        </div>
    })


    const List   = doingCategoryList.map( c => (c.doings || [])).flat()
    const endRankList = List.length
    const endRankCateg = List.filter(d => d.category === title).length
    const endRankState = List.filter(d => d.status === '0').length

    /* Input state */
    const newDo = {
            id: 'id'+ endRankList,
            name: '',
            category: title,
            rankImpo: String(endRankList),
            rankTime:  String(endRankList),
            rankState: String(endRankState),
            rankCateg: String(endRankCateg),
            status: '0'
    }

    const newElems = <div 
        key = {"createC" + rank + "D" + newDo.rankImpo}
        className ='doing newElems'
    >
        <Check typeCheck='addElems' state={newDo.status} onclick={()=>onclickCreate('addElems', newDo, title)}/>
    </div>

    //title = (title === '')? 'Дела': title

    const [existPalette,  setExistPalette] = useState(false)
    const changeVisibleColor = () => {
        setExistPalette(!existPalette)
    }

    return(
        <div className='content contentCategory'>
            <div className='elem contentCategoryTtl' style={style} id={'contentCategoryTtl_c'+rank}>
                <Input text={title} onChangeValue={e=>onChangeValueInput(e, rank)} name='category' rank={rank} classes={'input titels'} placeholder={"Категория"} style={style} />
                <PaletButton classes='paletButton' id={'paletButton_c'+rank} cardRank={rank} onclick={()=>changeVisibleColor(rank)}/>
                <Check typeCheck='deleteTitle' onclick={()=>onclickDelete('category', rank)}/>
                {existPalette && <Palette classes='paletteBox' onclickColor={onclickColor} changeVisibleColor={changeVisibleColor} rank={rank}/>}
            </div>
            <div className='elem contentCategoryBox'>
                {contentElems}
                {newElems}
            </div>
        </div>
    )
}

export default ContentCategory