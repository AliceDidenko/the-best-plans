import React from 'react'
import './GridCategory.css'
import Card from '../Card/Card'
import ContentCategory from '../ContentCategory/ContentCategory'


const GridCategory = ({doList, StateDoing, doingCategoryList, 
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
                                doList={doList}
                                onclick={StateDoing}
                                style = {{'backgroundColor': 'var('+elem.color+')'}}/>
        </Card>
    )


    return (<div id='gridCategory'>
        {body}
    </div>)
};

export default GridCategory