import React from 'react'
import './PaletButton.css'

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


const PaletButton = ({classes, onclick, cardRank}) => {
    const palitra = colors.map(c => <div className='color'id={'colorIn'+cardRank} color={c} style = {{'backgroundColor': 'var('+c+')'}}></div>)

    return ( <div>
        <div className={classes} onClick={() => document.getElementById()}></div>
        <div className='palitra'>{palitra}</div>
    </div>
    )
}

export default PaletButton