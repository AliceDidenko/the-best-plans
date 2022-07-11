import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {store} from './store'
import App from './App'
import './index.css'
import './back4app'

render (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
)