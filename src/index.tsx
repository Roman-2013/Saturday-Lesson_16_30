import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {MyPostType} from './components/Profile/Profile';
import {state} from '../src/redux/State'




ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>
    , document.getElementById('root')
);