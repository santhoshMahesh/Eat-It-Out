import React, { useState,useContext } from 'react';
import Maps from './components/Maps/Maps';
import Checkout from './components/Maps/Checkout';
import MealHeader from './SPA/MealHeader';
import CartProvider from './store/CartProvider.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App(){

  return (
    <CartProvider>
      <Router>
        <Switch>
         <Route exact path='/' component={MealHeader} />
         <Route path="/checkout" component={Checkout}/>
        </Switch>
      </Router>
    </CartProvider>
  )
}

export default App; 