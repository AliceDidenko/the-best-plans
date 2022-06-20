import React from 'react'
import './GridCategory.css'
import Card from '../Card/Card'
import AddButton from '../AddButton/AddButton'
import ContentCategory from '../ContentCategory/ContentCategory'


const GridCategory = ({ StateDoing, doingCategoryList, onChangeValueInput, onclickDelete, onclickCreate, onclickColor,
    dragStartHandler, 
    dragEndHandler, 
    dragLeaveHandler, 
    dragOverHandler,
    dragDropHandler}) => {

    const sortCategory = doingCategoryList.sort((a, b) => a.rank - b.rank)

    const body = sortCategory.map( (elem, index) => 
        <Card   card={elem}
                key={'card'+elem.rank}
                draggable={true}
                dragStartHandler={dragStartHandler}
                dragEndHandler={dragEndHandler}
                dragLeaveHandler={dragLeaveHandler} 
                dragOverHandler={dragOverHandler}
                dragDropHandler={dragDropHandler}>
            <ContentCategory    title={elem.category}
                                onChangeValueInput={onChangeValueInput}
                                doingCategoryList={doingCategoryList}
                                onclickState={StateDoing}
                                onclickDelete={onclickDelete}
                                onclickCreate={onclickCreate}
                                rank={elem.rank}
                                onclickColor={onclickColor}
                                style = {{'backgroundColor': 'var('+elem.color+')'}}/>
        </Card>
    )

    const newCategory = {
        category: '',
        rank: doingCategoryList.length,
        color: '--color-c0',
        doings: []
    }
    const buttonCreate = 
        <div  className='content buttonCreate'>
            <AddButton classes="button addCategory" onclick={()=>onclickCreate('addCategory', newCategory)}/>
        </div>


    return (<div id='gridCategory'>
        {body}
        {buttonCreate}
    </div>)
};

export default GridCategory