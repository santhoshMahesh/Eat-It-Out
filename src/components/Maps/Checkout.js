import React,{useState,useEffect} from 'react'
import Maps from './Maps'
import AddressForm from './AddressForm'

import {getPlacesData} from '../../API/RevGeoCoding';
import useGetGeolocation from '../../API/useGetGeolocation';


const Checkout = () => {
     
 
  const location=useGetGeolocation();
  const [address,setAddress]=useState({})

  useEffect(()=>{
    getPlacesData(location.coordinates.lat,location.coordinates.lng)
    .then((data)=>{
      console.log(data);
      if (typeof(data)!="undefined"){
        setAddress(data);
      }
    })
  },[location.coordinates.lat,location.coordinates.lng])
  
  return (
    <div>
      <Maps/>
      <AddressForm address={address}/>
    </div>
  )
}

export default Checkout
