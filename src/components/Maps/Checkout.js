import React,{useState,useEffect} from 'react'
import Maps from './Maps'
import AddressForm from './AddressForm'

import {getPlacesData} from '../../API/RevGeoCoding';
import useGetGeolocation from '../../API/useGetGeolocation';
import { getPositionAddress } from '../../API/FwdGeocoding';


const Checkout = () => {
  const location=useGetGeolocation();
  const [address,setAddress]=useState({})
  const [coordinates,setCoordinates]=useState([])

 
  useEffect(()=>{
    setCoordinates([location.coordinates.lat,location.coordinates.lng])
    getPlacesData(location.coordinates.lat,location.coordinates.lng)
    .then((data)=>{
    
      if (typeof(data)!="undefined"){
        setAddress(data);
      }
    })
  },[location.coordinates.lat,location.coordinates.lng])

  useEffect(()=>{
    console.log(address)
    getPositionAddress(address.street,address.city,address.state,address.postalCode,address.country)
    .then((data)=>{
      console.log(data)
      setCoordinates([data[0].lat,data[0].lon])
    })
  },[address])

 
  
  return (
    <div>
      <Maps coordinates={coordinates}/>
      <AddressForm address={address} setAddress={setAddress}/>
    </div>
  )
}

export default Checkout
