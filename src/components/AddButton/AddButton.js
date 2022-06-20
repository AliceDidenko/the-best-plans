import React from 'react'
import './AddButton.css'

const AddButton = ({classes, onclick}) => {
    return (
        <div className={classes} onClick={onclick}></div>
    )
}

export default AddButton