import React from 'react'
import './Palette.css'


const colors = [
    '--color-c0',
    '--color-c1',
    '--color-c2',
    '--color-c3',
    '--color-c4',
    '--color-c9',
    '--color-c5',
    '--color-c6',
    '--color-c7',
    '--color-c8'
]

const Palette = ({classes, changeVisibleColor, onclickColor, rank}) => {
    const onclick = (c, r) => {
        onclickColor(c, r);
        changeVisibleColor(); 
    }
    const palette = colors.map((color, index) => 
        <div className='color'key={'color'+index+'card'+rank} onClick={() => onclick(color, rank)} color={color} style = {{'backgroundColor': 'var('+color+')'}} />
    )

    return (
        <div className={classes}>
            <div className='palette'>{palette}</div>
        </div>
    )
}

export default Palette