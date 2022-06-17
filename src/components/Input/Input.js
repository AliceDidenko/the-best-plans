import React from 'react';
import './Input.css';


const Input = ({text, onChangeValue, name,  rank, rankD, placeholder, style, classes}) => {
 console.log('Input', text)
    return (<div className='inputBox'>
        <input className={classes} 
                style={style}
                autoComplete="off"
                name={name}
                type="text" 
                placeholder={placeholder}
                value={text}
                onChange = {e=>onChangeValue(e, rank, rankD)}>        
        </input>
    </div>)
};

export default Input;