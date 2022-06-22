import React from 'react'
import './UserVisibleBlock.css'
import Avatar from '../Avatar/Avatar'
import Buttom from '../Button/Button'


const UserVisibleBlock = ({user,userAuthorized, className, changeUserAuthorized, changeVisibleUserHiddenBlock, changeUserRegistration}) => {
    const textButton = userAuthorized? 'Выйти': 'Войти'
    const classes = userAuthorized? className: className+' block'

    return (<div id='userVisibleBlock' className={classes}>
        {userAuthorized && 
            <Avatar user={user} className='in-UserVisibleBlock'        onclick={changeVisibleUserHiddenBlock}/>
        }
        
        {!userAuthorized &&
            <Buttom user={user} className='in-UserVisibleBlock registration' onclick={changeUserRegistration} id='logReg' textButtonLog={'Зарегистрироваться'}/>
        }
        <Buttom user={user} className='in-UserVisibleBlock logOut' onclick={changeUserAuthorized} id='logInOut' textButtonLog={textButton}/>
    </div>)
};

export default UserVisibleBlock;