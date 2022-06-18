import React from 'react'
import './Check.css'

const Check = ({state, onclick, typeCheck}) => {
    const body = (typeCheck === 'state')?
                <div className = { state<0.5 ? 'check noCheck state' :
                                    (state>0.5 ? 'check onCheck state': 'check doingCheck state')  } 
                                    onClick={onclick}>
                </div>:
                <div className = {'check delete ' + typeCheck} onClick={onclick}></div>
                
    return (<>{body}</>)
}

export default Check