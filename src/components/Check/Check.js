import React from 'react'
import './Check.css'

const Check = ({state, onclick, typeCheck}) => {
    let body
    if(typeCheck === 'state') {
        body = <div className = { state<0.5 ? 'check noCheck state' :
            (state>0.5 ? 'check onCheck state': 'check doingCheck state')  } 
            onClick={onclick}>
        </div>
    }
    if(typeCheck === 'deleteTitle' || typeCheck === 'deleteDoing') body = <div className = {'check delete ' + typeCheck} onClick={onclick}></div>
    if(typeCheck === 'addElems') body = <div className = {'check add ' + typeCheck} onClick={onclick}></div>

    return (<>{body}</>)
}

export default Check