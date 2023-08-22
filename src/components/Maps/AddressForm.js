import React ,{useState,useEffect} from 'react'
import { validPincode } from './Regex';
import './AddressForm.css';
//Imports for future component rearranging
import { getPositionAddress } from '../../API/FwdGeocoding';


const AddressForm = ({address,setAddress}) => {
 
    const [street,setStreet]=useState("");
    const [city,setCity]=useState("");
    const [stateL,setStateL]=useState("");
    const [area,setArea]=useState("")
    const [postalCode,setPostalCode]=useState("");
    const [country,setCountry]=useState("");
    
    const formValidator=()=>{
        if(!(street.trim()!=="" && city.trim()!=="" && stateL.trim()!=="" && (postalCode.trim!=="" && validPincode.test(postalCode))&& country.trim()!=="")){
                setStreet("");
                setCity("");
                setStateL("");
                setPostalCode("");
                setCountry("");
        }
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      setAddress({road:street,city:city,country:country,state:stateL,postcode:postalCode,suburb:area})
      console.log(address)
    }


    useEffect(()=>{
      setStreet(address.road)
      setCity(address.city)
      setCountry(address.country)
      setStateL(address.state)
      setPostalCode(address.postcode)
      setArea(address.suburb)
    },[address])

    return (
    <div className="AddForm">
    <form onSubmit={handleSubmit}>
    <label>Steet</label>
    <input className="address" value={street} name="street" onChange={(e)=>setStreet(e.target.value)} type="text" />
    <label>Area</label>
    <input className="address" value={area} name="area" onChange={(e)=>setArea(e.target.value)} type="text" />
    <label>City</label>
    <input className="address" value={city} name="city" onChange={(e)=>setCity(e.target.value)} type="text" />
    <label>State</label>
    <input className="address" value={stateL} name="state" onChange={(e)=>setStateL(e.target.value)} type="text" />
    <label>Postalcode</label>
    <input className="address" value={postalCode} name="postalCode" onChange={(e)=>setPostalCode(e.target.value)} type="text" />
    <label>Country</label>
    <input className="address" value={country} name="country" onChange={(e)=>setCountry(e.target.value)} type="text" />
    <button class="submit" type="submit">Confirm Location</button>
    </form>
    </div>    
  )
}

export default AddressForm
