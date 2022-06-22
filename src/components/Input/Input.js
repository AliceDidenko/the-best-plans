import React from 'react';
import './Input.css';


const Input = ({text, onChangeValue, name,  placeholder, style, classes}) => {
 //console.log('Input', text)
    return (<div className='inputBox'>
        <input className={classes} 
                style={style}
                autoComplete="off"
                name={name}
                type="text" 
                placeholder={placeholder}
                value={text}
                onChange = {onChangeValue}>        
        </input>
    </div>)
};

export default Input;