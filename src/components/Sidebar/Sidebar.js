import React from 'react'
import './Sidebar.css'
import UserVisibleBlock from '../UserVisibleBlock/UserVisibleBlock.js'
import UserHiddenBlock from '../UserHiddenBlock/UserHiddenBlock.js'
import SortSelecter from '../SortSelecter/SortSelecter'
import Form from '../Form/Form'
import LK from '../LK/LK'


const Sidebar = ({  idSelected, changeIdSelected, changeSetFormValue, 
                    formValue, user, userAuthorized, onChangeValueInput, 
                    changeUserAuthorized, changeVisibleUserHiddenBlock, 
                    visibleUserHiddenBlock, changeUserRegistration,
                    changeVisibleMinAvatars, visibleMinAvatars, changeValueUserAva}) => {
    const classWidth = userAuthorized? 'sideBar': 'fillWindow'
    
    return (<div id='sidebar' className={classWidth}>
        {!userAuthorized &&
            <Form className='items borderbottom' onChangeValueInput={onChangeValueInput} changeSetFormValue={changeSetFormValue} formValue={formValue}/>
        }
        
        <LK className='items'>
            <UserVisibleBlock className='inLK borderbottom' user={user} changeUserAuthorized={changeUserAuthorized} userAuthorized={userAuthorized} changeVisibleUserHiddenBlock={changeVisibleUserHiddenBlock} changeUserRegistration={changeUserRegistration}/>
            {visibleUserHiddenBlock && userAuthorized &&
                <UserHiddenBlock  className='inLK borderbottom' user={user} onChangeValueInput={onChangeValueInput} changeVisibleMinAvatars={changeVisibleMinAvatars} changeValueUserAva={changeValueUserAva}  visibleMinAvatars={visibleMinAvatars} />
            }
        </LK>
        
        {userAuthorized &&
            <SortSelecter className='items borderbottom' idSelected={idSelected} changeIdSelected={changeIdSelected}/>
        }
    </div>)
};

export default Sidebar