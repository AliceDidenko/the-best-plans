import React from 'react'
import './Form.css'
import Input from '../Input/Input'

const Form = ({className, formValue, changeSetFormValue, onclick}) => {
    return (<form className={className} id='form'>
        <div className='userItem'>
            <div className='userItem-name'>{"Имя"}</div>
            <Input  text={formValue.name} 
                    name='name'   
                    classes={'input user'} 
                    placeholder={"Имя"}    
                    onChangeValue={e => changeSetFormValue(e)}/>
        </div>
        <div className='userItem'>
            <div className='userItem-name'>{"Логин"}</div>
            <Input  text={formValue.login}  
                    name='login' 
                    classes={'input user'} 
                    placeholder={"Логин"}  
                    onChangeValue={e => changeSetFormValue(e)}/>
        </div>
    </form>)
}

export default Form