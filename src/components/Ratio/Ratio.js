import React from 'react'
import './Ratio.css'

const Ratio = ({state, onclick}) => {
    const body = <div className = { state ? 'ratio onCheck' : 'ratio noCheck' } onClick={onclick}></div>
    return (<>{body}</>)
}

export default Ratio