import React from 'react'
import './PaletButton.css'


const PaletButton = ({classes, onclick}) => {
    return (<div className={classes} onClick={onclick}></div>)
}

export default PaletButton