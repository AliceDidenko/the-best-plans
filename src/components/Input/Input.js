import React from 'react'
import './Input.css'


const Input = ({text, onChangeValue, name,  placeholder, style, classes, readonly}) => {
 //console.log('Input', text)

    const inputElem = readonly? <input  className={classes} 
                                        style={style}
                                        autoComplete="off"
                                        name={name}
                                        type="text" 
                                        placeholder={placeholder}
                                        value={text}
                                        readOnly
                                        defaultValue="ААА">        
                                </input>: 
                                <input  className={classes} 
                                        style={style}
                                        autoComplete="off"
                                        name={name}
                                        type="text" 
                                        placeholder={placeholder}
                                        value={text}
                                        onChange = {onChangeValue}
                                        defaultValue="ААА">        
                                </input>
    return (<div className='inputBox'>
        {inputElem}
    </div>)
};

export default Input