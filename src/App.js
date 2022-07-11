import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'


const App = () => {
    return(
        <Routes>
            <Route exact path='/'      element={<HomePage/>}></Route>
            <Route exact path='/login' element={<LoginPage/>}></Route>
        </Routes>
    )
}

export default App