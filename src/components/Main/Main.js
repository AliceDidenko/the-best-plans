import React from 'react'
import './Main.css'
import GridCategory from '../GridCategory/GridCategory'
import GridState from '../GridState/GridState'
import GridRank from '../GridRank/GridRank'


const Main = ({idSelected, doingCategoryList, StateDoing, onChangeValueTitle, onChangeValueInput,
                dragStartHandler_cards, 
                dragEndHandler_cards, 
                dragLeaveHandler_cards, 
                dragOverHandler_cards,
                dragDropHandler_cards,
                dragStartHandler_doings, 
                dragEndHandler_doings, 
                dragLeaveHandler_doings, 
                dragOverHandler_doings,
                dragDropHandler_doings}) => {
    return (<div id='main'>
        {idSelected === '0' && <GridCategory StateDoing={StateDoing} doingCategoryList={doingCategoryList} onChangeValueTitle={onChangeValueTitle} onChangeValueInput={onChangeValueInput}
                                                dragStartHandler={dragStartHandler_cards}
                                                dragEndHandler={dragEndHandler_cards}
                                                dragLeaveHandler={dragLeaveHandler_cards} 
                                                dragOverHandler={dragOverHandler_cards}
                                                dragDropHandler={dragDropHandler_cards}/>}
        {idSelected === '1' && <GridState    StateDoing={StateDoing} doingCategoryList={doingCategoryList}/>}
        {idSelected === '2' && <GridRank     StateDoing={StateDoing} doingCategoryList={doingCategoryList} idSelected='2'
                                                dragStartHandler={dragStartHandler_doings}
                                                dragEndHandler={dragEndHandler_doings}
                                                dragLeaveHandler={dragLeaveHandler_doings} 
                                                dragOverHandler={dragOverHandler_doings}
                                                dragDropHandler={dragDropHandler_doings}/>}
        {idSelected === '3' && <GridRank     StateDoing={StateDoing} doingCategoryList={doingCategoryList} idSelected='3' onChangeValueInput={onChangeValueInput}
                                                dragStartHandler={dragStartHandler_doings}
                                                dragEndHandler={dragEndHandler_doings}
                                                dragLeaveHandler={dragLeaveHandler_doings} 
                                                dragOverHandler={dragOverHandler_doings}
                                                dragDropHandler={dragDropHandler_doings}/>}
    </div>)
};

export default Main;