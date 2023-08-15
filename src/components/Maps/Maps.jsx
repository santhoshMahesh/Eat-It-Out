import React, { useEffect ,useState} from 'react'
import "./Maps.css";
import L, { popup } from "leaflet";
import { MapContainer ,TileLayer,Popup,Marker, useMapEvents} from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletRoutingMachine from './LeafletRoutingMachine';
import AddressForm from './AddressForm';
import {getPlacesData} from '../../API/RevGeoCoding';
import useGetGeolocation from '../../API/useGetGeolocation';


const Maps = () => {
    
  const position = [12.9716, 77.5946];
  const location=useGetGeolocation();
  const [address,setAddress]=useState({'city': "",'city_district':"",'country':"",'country_code': "",'county':"",'postcode':"",'road':"",'state':"",'state_district':"",'suburb':""})

  useEffect(()=>{
    getPlacesData(location.coordinates.lat,location.coordinates.lng)
    .then((data)=>{
      console.log(data);
      if (typeof(data)!="undefined"){
        setAddress(data);
      }
    })
  },[location.coordinates.lat,location.coordinates.lng])

  return(
    <div>
     <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
       <LeafletRoutingMachine/>
       <LocationFinderDummy/>
     </MapContainer>
      <AddressForm address={address}/>
    </div>

)
}

let DefualtIcon=L.icon({
  iconUrl:"http://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize:[25,41],
  iconAnchor:[10, 41],
  popupAnchor:[2,-40]
})

L.Marker.prototype.options.icon=DefualtIcon;

const LocationFinderDummy=()=>{
  const map=useMapEvents({
    draggend(e){
      console.log(e.latlng);
    }
  });
}
export default Maps;
