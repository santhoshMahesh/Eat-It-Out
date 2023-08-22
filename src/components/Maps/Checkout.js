import React,{useState,useEffect} from 'react'
import Maps from './Maps'
import AddressForm from './AddressForm'
import {getPlacesData} from '../../API/RevGeoCoding';
import useGetGeolocation from '../../API/useGetGeolocation';
import { getPositionAddress } from '../../API/FwdGeocoding';
import Total from './Total';
import './checkout.css'

const Checkout = () => {
  
  const location=useGetGeolocation();
  const [address,setAddress]=useState({})
  const [coordinates,setCoordinates]=useState([])
  const [distance,setDistance]=useState(0)
  
 
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
      setCoordinates([data[0].lat,data[0].lon])
    })
  },[address])

  useEffect(()=>{
    console.log(`I am the ${distance/1000}`)
  },[distance])
 
  
  return (
    <main>
    <Maps coordinates={coordinates} setDistance={setDistance} />
    <div className="summary">
      <AddressForm address={address} setAddress={setAddress}/>
      <Total distance={distance} />
    </div>
    </main>
  )
}

export default Checkout
