import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Main} from './components/Main/Main';
import {UserList} from './components/UserList/UserList';
import {homeURL} from './helper';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
            <Route path= {homeURL + "/"} exact component = {Main} />
            <Route path= {homeURL + "/Login"} exact component = {Login} />
            <Route path= {homeURL + "/User-list"} exact component = {UserList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
