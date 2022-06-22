import React from 'react'
import './UserHiddenBlock.css'
import Input from '../Input/Input'

//

const UserHiddenBlock = ({user, className, onChangeValueInput}) => {
 
    return (<div id='userHiddenBlock' className={className}>
        <div className='userItem'>
            <div className='userItem-name'>{"Имя"}</div>
            <Input  text={user.name} 
                    name='name'   
                    classes={'input user'} 
                    placeholder={"Имя"}    
                    onChangeValue={e => onChangeValueInput(e)}/>
        </div>
        <div className='userItem'>
            <div className='userItem-name'>{"Логин"}</div>
            <Input  text={user.login}  
                    name='login' 
                    classes={'input user'} 
                    placeholder={"Логин"}  
                    onChangeValue={e => onChangeValueInput(e)}/>
        </div>
        <div className='userItem'>
            <div className='userItem-name'>{"Аватар"}</div>
        </div>
    </div>)
};

export default UserHiddenBlock;