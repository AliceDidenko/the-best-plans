import React from 'react'
import './Button.css'

const Button = ({className, textButtonLog, onclick}) => {
    return (
        <div className={'button ' + className} onClick={onclick}><span>{textButtonLog}</span></div>
    )
}

export default Button