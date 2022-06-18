import React from 'react'
import './GridState.css'
import ContentState from '../ContentState/ContentState'
import Card from '../Card/Card'


const GridState = ({ StateDoing, doingCategoryList, onChangeValueInput,
    dragStartHandler, 
    dragEndHandler, 
    dragLeaveHandler, 
    dragOverHandler,
    dragDropHandler }) => {

    const body = []
    const titles = ['Не начато', 'Приступил', 'Сделано']
    const colors = ['--color-c1', '--color-c2', '--color-c6']
    for( let i=0; i<3; i++) {
        body.push(
            <Card
                key={'card'+i}
                draggable={false}
                dragStartHandler={dragStartHandler}
                dragEndHandler={dragEndHandler}
                dragLeaveHandler={dragLeaveHandler} 
                dragOverHandler={dragOverHandler}
                dragDropHandler={dragDropHandler}>
                <ContentState    title={titles[i]}
                                    status={i}
                                    doingCategoryList={doingCategoryList}
                                    onChangeValueInput={onChangeValueInput}
                                    onclick={StateDoing}
                                    dragStartHandler={dragStartHandler}
                                    dragEndHandler={dragEndHandler}
                                    dragLeaveHandler={dragLeaveHandler} 
                                    dragOverHandler={dragOverHandler}
                                    dragDropHandler={dragDropHandler}
                                    style = {{'backgroundColor': 'var('+colors[i]+')'}}/>
            </Card>
        )
    }

    console.log(body)
    return (<div id='gridState'>
        {body}
    </div>)
};

export default GridState;