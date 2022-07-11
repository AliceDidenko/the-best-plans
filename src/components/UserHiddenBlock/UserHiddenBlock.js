import React from 'react'
import './UserHiddenBlock.css'
import Input from '../Input/Input'
import AvatarButton from '../AvatarButton/AvatarButton'
import MinAvatars from '../MinAvatars/MinAvatars'
//

const UserHiddenBlock = ({user, className, onChangeValueInput, changeVisibleMinAvatars, visibleMinAvatars, changeValueUserAva}) => {
    const rotateClass = visibleMinAvatars? ' rotateImgDown': ' rotateImgUpp'


    return (<div id='userHiddenBlock' className={className}>
        <div className='userItem'>
            <div className='userItem-name'>{"Имя"}</div>
            <Input  text={user.name} 
                    name='name'   
                    classes={'input user inputChangeble'} 
                    placeholder={"Имя"}    
                    onChangeValue={e => onChangeValueInput(e)}/>
        </div>
        <div className='userItem userItemMagrin'>
            <div className='userItem-name'>{"Логин"}</div>
            <Input  text={user.login}  
                    name='login' 
                    classes={'input user inputChangeble'} 
                    placeholder={"Логин"}  
                    onChangeValue={e => onChangeValueInput(e)}/>
        </div>
        <div className='userItem' id='avatarChooserBox'>
            <div className='userItem-name avatarInput userItemMagrin'>
                {"Аватар"}
                <div className='forInput'>
                    <Input  text={user.avatar}  
                        name='avatar' 
                        classes={'input user inputUnChangeble'} 
                        placeholder={"Аватар"}
                        readonly={true}/>
                    <AvatarButton classes={'avatarButton' + rotateClass} id={'avatarButton'} onclick={()=>changeVisibleMinAvatars()}/>
                </div>
            </div>
            {visibleMinAvatars && 
                <div className='userItem-box userItemMagrin'><MinAvatars user={user} changeValueUserAva={changeValueUserAva}/></div>
            }
        </div>
    </div>)
};

export default UserHiddenBlock;