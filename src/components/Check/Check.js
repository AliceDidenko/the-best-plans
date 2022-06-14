import React from 'react'
import './Check.css'

const Check = ({state, onclick}) => {
    const body = <div className = { state<0.5 ? 'check noCheck' :
                                    (state>0.5 ? 'check onCheck': 'check doingCheck')  } 
                                    onClick={onclick}></div>

    return (<>{body}</>)
}

export default Check