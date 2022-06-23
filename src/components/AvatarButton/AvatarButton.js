import React from 'react'
import './AvatarButton.css'


const AvatarButton = ({classes, onclick, id}) => {
    return (<div className={classes} id={id} onClick={onclick}></div>)
}

export default AvatarButton