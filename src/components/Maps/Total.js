import React from 'react'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import './Totalbill.css'
import { useEffect } from 'react/cjs/react.production.min';

const Total = ({distance}) => {
const cartCtx=useContext(CartContext);

useEffect(()=>{
 const D=distance/1000;
 const dist=D.toFixed(2);

},[distance])
console.log(cartCtx)
  return (
    <div className="Total">
        {cartCtx.items.map((item)=>(
             <div>
                <h4>Dish:{item.name} </h4>
                <h4><span> Quanity:{item.amount}</span></h4>
                <h4><span> Price :{item.price}</span></h4>
             </div>   
            
        ))}


         <h3>SubTotal:{cartCtx.totalAmount}</h3>
        <p><i>
            Delivery charged per km is 5$ 
            </i>
        </p>    
        <h1>distance={dist}x5= {ss*5}</h1>
        <h1>Total:</h1>
        

      
    </div>
  )
}

export default Total
