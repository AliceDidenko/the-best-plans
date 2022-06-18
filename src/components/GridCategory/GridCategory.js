import React from 'react'
import './GridCategory.css'
import Card from '../Card/Card'
import ContentCategory from '../ContentCategory/ContentCategory'


const GridCategory = ({ StateDoing, doingCategoryList, onChangeValueInput, onclickDelete,
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
                                rank={elem.rank}
                                style = {{'backgroundColor': 'var('+elem.color+')'}}/>
        </Card>
    )


    return (<div id='gridCategory'>
        {body}
    </div>)
};

export default GridCategory