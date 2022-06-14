import React from 'react'
import './GridRank.css'
import Card from '../Card/Card'
import ContentRank from '../ContentRank/ContentRank'

const GridRank = ({doList, StateDoing, idSelected,
                    dragStartHandler, 
                    dragEndHandler, 
                    dragLeaveHandler, 
                    dragOverHandler,
                    dragDropHandler}) => {

    return (<div id='gridRank'>
        <Card draggable={false}>
            <ContentRank
                        doList={doList}
                        onclick={StateDoing}
                        idSelected={idSelected}
                        dragStartHandler={dragStartHandler}
                        dragEndHandler={dragEndHandler}
                        dragLeaveHandler={dragLeaveHandler} 
                        dragOverHandler={dragOverHandler}
                        dragDropHandler={dragDropHandler}
                        style = {{'backgroundColor': 'var(--color-c0)'}}/>
        </Card>
    </div>)
};

export default GridRank;