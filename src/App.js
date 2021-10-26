import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddUser from './AddUser/AddUser';
import Home from './Home/Home';
import User from './User/User';
import Header from './Header/Header';
import Update from './Update/Update';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/User">
            <User></User>
          </Route>
          <Route path="/User/AddUser">
            <AddUser></AddUser>
          </Route>
          <Route path="/User/Update/:id">
            <Update></Update>          
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
