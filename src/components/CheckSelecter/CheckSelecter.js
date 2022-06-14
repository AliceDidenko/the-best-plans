import React from 'react'
import './CheckSelecter.css'
import Ratio from '../Ratio/Ratio'

const CheckSelecter = ({idSelected, id, text, onclick}) => {
    return (<div className='checkDiv' id={id}>
        <Ratio state={idSelected===id} onclick={()=>onclick(id)}/>
        <div className='checkElem checkTxt'>{text}</div>
    </div>)
}

export default CheckSelecter