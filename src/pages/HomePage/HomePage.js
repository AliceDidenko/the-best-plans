import React, { useState }  from 'react'
//import {Navigate} from 'react-router-dom'
import {Parse} from "parse"
import './HomePage.css'
import doCategoryList from '../../doList'
import user from '../../user.js'
//import doings from './userList'
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'

import { initializeParse } from '@parse/react'
import {keys} from '../../back4app'
//const appParse = 
initializeParse(
    process.env.REACT_APP_SERVER_URL,     //'YOUR_SERVER_URL',
    process.env.REACT_APP_BACK4APP_APPLICATION_ID, //'YOUR_APPLICATION_ID',
    process.env.REACT_APP_BACK4APP_JAVASCRIPT_KEY  //'YOUR_JAVASCRIPT_KEY'
)

const HomePage = ({}) => {
    /* Form Registration visible */
    const [formValue, setFormValue] = useState({name: '', login:''})
    const changeSetFormValue = (x) => {
        setFormValue({...formValue, [x.target.name]: x.target.value})
        console.log(formValue) /*******************************************/
    }
    /*******************************************/
    const doUserRegistration = async function () {
        var avatars = ["anubis", "cat", "eye", "fish", "homer", "jake", "octopus", "penguin", "totem", "unicellular", "unicorn", "vegetable"]
        var ra = avatars[Math.floor(Math.random()*avatars.length)]
        console.log('doUserRegistration', formValue)   

        /*
        var newUser = {
            "username": formValue.name,
            "password": formValue.login,
            "avatar": ra,
            "id": String(Number(new Date) + '_' + Math.floor(Math.random()*1000) + ''),
            "doList": []
        }
        */
        

        const username = formValue.name
        const password = formValue.login
        const avatar = ra
        const id = String(Number(new Date()) + '_' + Math.floor(Math.random()*1000) + '')
        const doList = []
        let attrs = {
            'username': username,
            'password': password,
            'ACL': new Parse.ACL(), 
            'avatar': avatar, 
            'id': id, 
            'doList': doList
        }

        var newUser = new Parse.User()
        newUser.setUsername("admin", null)
        newUser.setPassword("password", null)
        newUser.save()
        //newUser.set("doList", [])
        //newUser.set("id", String(Number(new Date()) + '_' + Math.floor(Math.random()*1000) + ''))
        //newUser.set("avatar", ra)
        //newUser.set("username", 'formValue.name')
        //newUser.set("password", 'formValue.login')
        console.log(newUser.getUsername())
        /*
        return await newUser.signUp()
        .then((createdUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
            console.log('newUser = ', createdUser)
            alert(
                'Success!',
                `User ${createdUser.getUsername()} was successfully created!`,
            );
            return true;
        })
        .catch((error) => {
            alert("Error: " + error.code + " " + error.message)
            return false;
        })
        */
    }

    /* User visible */
    const [userAuthorized, setUserAuthorized] = useState(true)
    const changeUserAuthorized = () => { 
        setUserAuthorized(!userAuthorized)
        setVisibleUserHiddenBlock(!visibleUserHiddenBlock)
        //document.getElementById('sidebar').style.animation = 'sideBarWidth_out 1s 0'
    }
    const changeUserRegistration = () => {
        doUserRegistration() //***************************************8
        setUserAuthorized(!userAuthorized)
    }

    const [visibleUserHiddenBlock, setVisibleUserHiddenBlock] = useState(false)
    const changeVisibleUserHiddenBlock = () => setVisibleUserHiddenBlock(!visibleUserHiddenBlock)
    const [visibleMinAvatars, setVisibleMinAvatars] = useState(false)
    const changeVisibleMinAvatars = () => {
        setVisibleMinAvatars(!visibleMinAvatars)
    }

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
    /* for user */
    const [userData, setUserData] = useState(user) /****************** */
    const changeValueUser = (x) => {
        setUserData({...userData, [x.target.name]: x.target.value})
    }
    const changeValueUserAva = (newAva) => {
        setUserData({
            name: userData.name,
            login: userData.login,
            avatar: newAva,
            id: userData.id
        })
    }
    /* for doList */
    const changeValueInput = (x, rc, ri=false) => {
        const doingCategoryListCopy = doingCategoryList.map( c => {
            let newCat = c
            
            if(c.rank === rc) { 
                if(ri) {
                    newCat.doings = c.doings.map(d => { 
                        // eslint-disable-next-line no-unused-expressions
                        return d.rankImpo === ri
                        ? {...d, [x.target.name]: x.target.value}
                        : d
                    })
                } else {
                    newCat[x.target.name]= x.target.value
                    newCat.doings = c.doings.map(d => { 
                        d.category = x.target.value
                        return d
                    })
                } 
                //console.log(x.target)
            }
            return newCat
        })
        setCardList(doingCategoryListCopy)
    }


    /* Delete */
    const deleteElement = (typeElement, r) => {
        let doingCategoryListCopy = []

        if (typeElement === 'category') {
            doingCategoryListCopy = doingCategoryList.filter(obj => obj.rank!==r)
        } else {
            doingCategoryListCopy= doingCategoryList.map(c => {
                const newC = c
                newC.doings = c.doings.filter(d => d.rankImpo!==r)
                return newC
            })
        }
        setCardList(doingCategoryListCopy)
    }
    /* Add */
    const createElement = (typeElem, newElem, nameBox) => {
        if(typeElem === 'addElems') {
            setCardList(
                doingCategoryList.map(c => {
                    const newC = c
                    if((c.category === nameBox)) {
                        newC.doings[newC.doings.length] = newElem
                    }
                    return newC
                })
            )
        } 
        if (typeElem === 'addCategory') {
            setCardList(
                doingCategoryList.concat([newElem])
            )
        }
    }

    /* Color state */
    const changeClickColor = (color, r) => {
        setCardList(
            doingCategoryList.map(c => {
                const newC = c
                if((c.rank === r)) {
                    newC.color = color
                }
                return newC
            })
        )
    }



    const body = <div id='app'>
        <Sidebar idSelected={idSelected} changeIdSelected={changeIdSelected} 
                                        user={userData} 
                                        userAuthorized={userAuthorized}
                                        onChangeValueInput={changeValueUser}
                                        visibleUserHiddenBlock={visibleUserHiddenBlock}
                                        changeVisibleUserHiddenBlock={changeVisibleUserHiddenBlock}
                                        changeUserAuthorized={changeUserAuthorized}
                                        changeSetFormValue={changeSetFormValue}
                                        formValue={formValue}
                                        changeUserRegistration={changeUserRegistration}
                                        changeVisibleMinAvatars={changeVisibleMinAvatars}
                                        visibleMinAvatars={visibleMinAvatars}
                                        changeValueUserAva={changeValueUserAva}/>
        {userAuthorized &&
        <Main    idSelected={idSelected} StateDoing={StateDoing} doingCategoryList={doingCategoryList} 
                                                                onclickColor={changeClickColor}
                                                                onChangeValueInput={changeValueInput}
                                                                onclickDelete={deleteElement}
                                                                onclickCreate={createElement}
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
        }
    </div>
    return (
        <>{body}</>
    )
    //<Navigate to='login'/>
}

export default HomePage