import React ,{useState,useEffect} from 'react'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import './Totalbill.css'


const Total = ({distance}) => {
const cartCtx=useContext(CartContext);
const [km,setKm]=useState();
const [priceKm,setPriceKm]=useState();
const [pay,setPay]=useState(cartCtx.totalAmount);



console.log(cartCtx)

useEffect(()=>{
  const dist=distance/1000;
  const d=dist.toFixed(2)
  const dCharges=d*5
  const GTotal=cartCtx.totalAmount+dCharges
  setKm(d);
  setPriceKm(dCharges.toFixed(2));
  setPay(GTotal.toFixed(2));
  

},[distance,cartCtx])

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
        <h1>Distance:{km}</h1>
        <h1>Total:{priceKm}</h1>
        <h1>Grand Total:{pay}</h1>
    </div>
  )
}

export default Total
