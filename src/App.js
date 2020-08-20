import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Main} from './components/Main/Main';
import {UserList} from './components/UserList/UserList';
import {PageNotFound} from './components/PageNotFound/PageNotFound.js';
import {homeURL} from './helper';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path =  {homeURL + "/"} component = {Main} />
            <Route exact path = {homeURL + "/Login"} component = {Login} />
            <Route exact path = {homeURL + "/User-list"} component = {UserList} />
            <Route exact path = {homeURL + "/404"} component = {PageNotFound} />
            <Redirect to = {homeURL + "/404"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
