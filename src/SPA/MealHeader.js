import React, { useState,useContext } from 'react';
import Header from '../components/Layout/Header';
import Cart from '../components/Cart/Cart';
import Meals from '../Meals/Meals'

export const UserContext=React.createContext();

function MealHeader(){
 
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
      <main>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
      </main>
  )
}

export default MealHeader; 