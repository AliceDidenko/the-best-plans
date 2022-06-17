import React from 'react'
import './GridRank.css'
import Card from '../Card/Card'
import ContentRank from '../ContentRank/ContentRank'

const GridRank = ({doingCategoryList, StateDoing, idSelected, onChangeValue,
                    dragStartHandler, 
                    dragEndHandler, 
                    dragLeaveHandler, 
                    dragOverHandler,
                    dragDropHandler}) => {

    return (<div id='gridRank'>
        <Card draggable={false}>
            <ContentRank
                        doingCategoryList={doingCategoryList}
                        onclick={StateDoing}
                        onChangeValue={onChangeValue}
                        idSelected={idSelected}
                        dragStartHandler={dragStartHandler}
                        dragEndHandler={dragEndHandler}
                        dragLeaveHandler={dragLeaveHandler} 
                        dragOverHandler={dragOverHandler}
                        dragDropHandler={dragDropHandler}
                        style = {{'backgroundColor': 'var(--color-c6)'}}/>
        </Card>
    </div>)
};

export default GridRank;