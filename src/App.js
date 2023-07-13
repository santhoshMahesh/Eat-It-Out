import React, { useState,useContext } from 'react';
import Maps from './components/Maps/Maps';
import MealHeader from './SPA/MealHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App(){

  return (
      <Router>
        <Switch>
         <Route exact path='/' component={MealHeader} />
         <Route path="/Maps" component={Maps}/>
        </Switch>
      </Router>
  )
}

export default App; 