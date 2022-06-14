import React from 'react'
import './Main.css'
import GridCategory from '../GridCategory/GridCategory'
import GridState from '../GridState/GridState'
import GridRank from '../GridRank/GridRank'


const Main = ({idSelected, doList, doingCategoryList, StateDoing,
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
        {idSelected === '0' && <GridCategory doList={doList} StateDoing={StateDoing} doingCategoryList={doingCategoryList}
                                                dragStartHandler={dragStartHandler_cards}
                                                dragEndHandler={dragEndHandler_cards}
                                                dragLeaveHandler={dragLeaveHandler_cards} 
                                                dragOverHandler={dragOverHandler_cards}
                                                dragDropHandler={dragDropHandler_cards}/>}
        {idSelected === '1' && <GridState    doList={doList} StateDoing={StateDoing} />}
        {idSelected === '2' && <GridRank     doList={doList} StateDoing={StateDoing} idSelected='2'
                                                dragStartHandler={dragStartHandler_doings}
                                                dragEndHandler={dragEndHandler_doings}
                                                dragLeaveHandler={dragLeaveHandler_doings} 
                                                dragOverHandler={dragOverHandler_doings}
                                                dragDropHandler={dragDropHandler_doings}/>}
        {idSelected === '3' && <GridRank     doList={doList} StateDoing={StateDoing} idSelected='3'
                                                dragStartHandler={dragStartHandler_doings}
                                                dragEndHandler={dragEndHandler_doings}
                                                dragLeaveHandler={dragLeaveHandler_doings} 
                                                dragOverHandler={dragOverHandler_doings}
                                                dragDropHandler={dragDropHandler_doings}/>}
    </div>)
};

export default Main;