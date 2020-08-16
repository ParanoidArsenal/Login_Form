import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Main} from './components/Main/Main';
import {UserList} from './components/UserList/UserList';

function App() {


  return (
    <BrowserRouter>
      <Switch>
        {/* <div className="App"> */}
            <Route path= "/" exact component = {Main} />
            <Route path= "/login" exact component = {Login} />
            <Route path= "/user-list" exact component = {UserList} />
        {/* </div> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
