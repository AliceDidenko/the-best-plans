import React from 'react'
import './Sidebar.css'
import Avatar from '../Avatar/Avatar.js'
import SortSelecter from '../SortSelecter/SortSelecter'


const Sidebar = ({idSelected, changeIdSelected}) => {
    return (<div id='sidebar'>
        <Avatar       className='items'/>
        <SortSelecter className='items' idSelected={idSelected} changeIdSelected={changeIdSelected}/>
    </div>)
};

export default Sidebar