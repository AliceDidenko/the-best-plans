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
        setIdSelected(i);
    };


    const apperDoings = a => a.map( c => (c.doings || [])).flat()
    /* doList state */
    const [doingCategoryList, setCardList] = useState(doCategoryList)
    const doings = apperDoings(doingCategoryList)

    const StateDoing = (title, i, index) => {
        const iObj = doings.find(obj => obj.id === i)
        iObj.status = String( Number(iObj.status) < 1? Number(iObj.status)+0.5: 0 )

        doings[i] = iObj
        doingCategoryList.filter((elem) => elem.category === title)[0].doings[i] = iObj
        setCardList([...doingCategoryList])
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
        setCurrentCard(card)
        document.body.style.background = 'var(--color-bodyGray)'
    }
    const dragOverHandler_cards = (e) => { e.preventDefault()}
    const dragEndHandler_cards = (e, card) => { document.body.style.background = 'var(--color-gray1)'}
    const dragLeaveHandler_cards = (e) => {}
    const dragDropHandler_cards = (e, card) => {
        e.preventDefault()
        document.body.style.background = 'var(--color-gray1)'

        const newRank = Number(card.rank)
        const oldRank = Number(currentCard.rank)
        const doingCategoryListCopy = doingCategoryList.map( c => {
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
            }
            return c
        })
        setCardList(doingCategoryListCopy)
    }


    /* CARD state */
    const [currentDoing, setCurrentDoing] = useState(null)
    /* drag and drop state DOINGS */
    const dragStartHandler_doings = (e, doing) => {
        setCurrentDoing(doing)
        document.body.style.background = 'var(--color-bodyGray)'
    }
    const dragOverHandler_doings = (e) => { e.preventDefault()}
    const dragEndHandler_doings = (e) => { document.body.style.background = 'var(--color-gray1)'}
    const dragLeaveHandler_doings = (e) => {}
    const dragDropHandler_doings = (e, doing, idSel) => {
        e.preventDefault()
        document.body.style.background = 'var(--color-gray1)'

        const newRank = Number(doing.rankImpo * (idSel === '2')        + doing.rankTime * (idSel === '3')        + doing.rankState * (idSel === '1'))
        const oldRank = Number(currentDoing.rankImpo * (idSel === '2') + currentDoing.rankTime * (idSel === '3') + doing.rankState * (idSel === '1'))

        const doingCategoryListCopy = doingCategoryList.map( c => {
            const newC = c

            newC.doings = c.doings.map(d => {
                const r = Number(d.rankImpo * (idSel === '2') + d.rankTime * (idSel === '3') + d.rankState * (idSel === '1'))
                
                if(newRank < oldRank) {
                    if((r >= newRank) && (r < oldRank)) {
                        if(idSel === '2') d.rankImpo = String(Number(r) + 1)
                        if(idSel === '3') d.rankTime = String(Number(r) + 1)
                        if(idSel === '1') d.rankState = String(Number(r) + 1)
                    }
                }
                if(newRank > oldRank) {
                    if((r <= newRank) && (r > oldRank)) {
                        if(idSel === '2') d.rankImpo = String(Number(r) - 1)
                        if(idSel === '3') d.rankTime = String(Number(r) - 1)
                        if(idSel === '1') d.rankState = String(Number(r) - 1)
                    }
                }
                if(d.id === currentDoing.id) {
                    if(idSel === '2') d.rankImpo = String(newRank)
                    if(idSel === '3') d.rankTime = String(newRank)
                    if(idSel === '1') d.rankState = String(newRank)
                }
                console.log('new rankState', d.rankState)
                return d
            })
            return newC
        })
        setCardList(doingCategoryListCopy)
    }


    /* Input state */
    const changeValueTitle = (x, r) => {
        const doingCategoryListCopy = doingCategoryList.map( c => {
            if(c.rank === r) {
                return {
                    ...c,
                    [x.target.name]: x.target.value
                }
            }
            return c
        })
        setCardList(doingCategoryListCopy)
    }
    const changeValueInput = (x, rc, ri=false) => {
        const doingCategoryListCopy = doingCategoryList.map( c => {
            const newCat = c

            if(c.rank === rc) {  
                if(ri) {
                    newCat.doings = c.doings.map(d => { 
                        // eslint-disable-next-line no-unused-expressions
                        return d.rankImpo === ri
                        ? {...d, [x.target.name]: x.target.value}
                        : d
                    })
                } else newCat[x.target.name]= x.target.value
                //console.log(x.target)
            }
            return newCat
        })
        setCardList(doingCategoryListCopy)
    }
    
    return(
        <div id='app'>
            <Sidebar idSelected={idSelected} changeIdSelected={changeIdSelected}/>
            <Main    idSelected={idSelected} StateDoing={StateDoing} doingCategoryList={doingCategoryList} 
                                                                    onChangeValueTitle={changeValueTitle}
                                                                    onChangeValueInput={changeValueInput}
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