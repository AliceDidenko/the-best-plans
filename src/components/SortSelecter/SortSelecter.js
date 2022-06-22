import React from 'react'
import './SortSelecter.css'
import CheckSelecter from '../CheckSelecter/CheckSelecter'


const SortSelecter = ({idSelected, changeIdSelected, className}) => {
    return (<div id='sortSelecter' className={className}>
        <div id='sortSelecterTitle'><h3>Сортировка</h3></div>
        <CheckSelecter idSelected={idSelected} id='0' text='По категориям' onclick={changeIdSelected}/>
        <CheckSelecter idSelected={idSelected} id='1' text='По состоянию' onclick={changeIdSelected}/>
        <CheckSelecter idSelected={idSelected} id='2' text='По важности' onclick={changeIdSelected}/>
        <CheckSelecter idSelected={idSelected} id='3' text='По срочности' onclick={changeIdSelected}/>
    </div>)
};

export default SortSelecter