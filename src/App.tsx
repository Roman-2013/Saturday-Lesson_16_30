import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/NavBar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

import {StateType} from './redux/State';

export type AppPropsType={
   state:StateType
}



function App(props:AppPropsType) {

    return (
        <div className="appWrapper">

            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Route path={'/profile'} render={()=><Profile posts={props.state.profalePage.posts}/>}/>
                <Route path={'/dialogs'} component={()=><Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    )
}

export default App;
