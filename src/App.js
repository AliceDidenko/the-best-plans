import React, { useState } from 'react'
//import doings from './userList'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import './App.css'
import doCategoryList from './doList';

const App = () => {

    /* SortSelecter state */
    const [idSelected, setIdSelected] = useState('0')
    const changeIdSelected = (i) => {
        console.log(i, 'IdSelected')
        setIdSelected(i);
    };

    //
    const apperDoings = a => a.map( c => (c.doings || [])).flat()
    /* doList state */
    const [doingCategoryList, setCardList] = useState(doCategoryList)
    const doings = apperDoings(doingCategoryList)

    const StateDoing = (title, i, index) => {
        const iObj = doings.find(obj => obj.id === i)
        iObj.status = String( Number(iObj.status) < 1? Number(iObj.status)+0.5: 0 ) 
        console.log('newDoing', i, doingCategoryList.filter((elem) => elem.category === title)[0].doings)

        doings[i] = iObj
        doingCategoryList.filter((elem) => elem.category === title)[0].doings[i] = iObj
        setCardList([...doingCategoryList]) //setDoList([...doingCategoryList])
    };
    /*
    const RemoveDoing = (i) => {
        console.log(i, 'Doing')
        setDoList(doings);
    };
    const AddDoing = (i) => {
        console.log(i, 'Doing')
        setDoList(doings);
    };
*/

    /* CARD state */
    const [currentCard, setCurrentCard] = useState(null)

    /* drag and drop state CARDS */
    const dragStartHandler_cards = (e, card) => {
        //e.preventDefault()
        setCurrentCard(card)

        document.body.style.background = 'var(--color-bodyGray)'
        console.log('currentCard =', currentCard)
        console.log('dragStart =', card)
    }
    const dragOverHandler_cards = (e) => {
        e.preventDefault()
    }
    const dragEndHandler_cards = (e, card) => {
        //e.preventDefault() 
        //e.currentTarget.classList.remove("dragOver")
        document.body.style.background = 'var(--color-gray1)'
        console.log('dragEnd, ', doingCategoryList)
    }
    const dragLeaveHandler_cards = (e) => {
        //e.preventDefault()
    }
    
    const dragDropHandler_cards = (e, card) => {
        e.preventDefault()
        document.body.style.background = 'var(--color-gray1)'

        const newRank = Number(card.rank)
        const oldRank = Number(currentCard.rank)
        console.log('oldRank =', oldRank)
        console.log('newRank =', newRank)

        const doingCategoryListCopy = doingCategoryList.map( c => {
            console.log('map: ', c.category, c.rank)
            if(newRank < oldRank) {
                if((c.rank >= newRank) && (c.rank < oldRank)) {
                    c.rank = String(Number(c.rank) + 1)
                }
            }
            if(newRank > oldRank) {
                if((c.rank <= newRank) && (c.rank > oldRank)) {
                    c.rank = String(Number(c.rank) - 1)
                }
            }
            if(c.category === currentCard.category) {
                c.rank = String(newRank)
                console.log('?? card.rank', card.rank)
            }
            //console.log('new card =', c.category, c.rank)
            return c
        })
        console.log('new rank = ', doingCategoryListCopy.map(c => c.rank))

        setCardList(doingCategoryListCopy)
        
    }


    /* drag and drop state DOINGS */
    const dragStartHandler_doings = (e, d) => {
        e.preventDefault()

        console.log('start', d)
    }
    const dragEndHandler_doings = (e, d) => {
        e.preventDefault()

        console.log('end', d)
    }
    const dragLeaveHandler_doings = (e) => {
        e.preventDefault()
    }
    const dragOverHandler_doings = (e) => {
        e.preventDefault()
    }
    const dragDropHandler_doings = (e) => {
        e.preventDefault()
    }

    return(
        <div id='app'>
            <Sidebar idSelected={idSelected} changeIdSelected={changeIdSelected}/>
            <Main    idSelected={idSelected} StateDoing={StateDoing} doingCategoryList={doingCategoryList}
                                            dragStartHandler_cards={dragStartHandler_cards}
                                            dragEndHandler_cards={dragEndHandler_cards}
                                            dragLeaveHandler_cards={dragLeaveHandler_cards} 
                                            dragOverHandler_cards={dragOverHandler_cards}
                                            dragDropHandler_cards={dragDropHandler_cards}
                                            dragStartHandler_doings={dragStartHandler_doings}
                                            dragEndHandler_doings={dragEndHandler_doings}
                                            dragLeaveHandler_doings={dragLeaveHandler_doings} 
                                            dragOverHandler_doings={dragOverHandler_doings}
                                            dragDropHandler_doings={dragDropHandler_doings}/>
        </div>
    );
}

export default App