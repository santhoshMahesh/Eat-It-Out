import React, { useEffect } from 'react'
import { MapContainer ,TileLayer,Popup,Marker} from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "./Maps.css";
import L, { popup } from "leaflet";
import LeafletGeocoder from './LeafletGeocoder';
import LeafletRoutingMachine from './LeafletRoutingMachine';


const Maps = () => {
   const position = [12.9716, 77.5946]

 useEffect(()=>{
 const  getData = async()=>{

   const url = 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?street=34%20West%2013th%20Street&city=New%20York%20City&state=NY&postalcode=10011&country=USA&accept-language=en&polygon_threshold=0.0';
   const options = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Key': '6b23ea1377mshf187b95815b27f6p1551d2jsnf01c46eadd15',
       'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(`the lat is ${data[0].lat} and the lon is ${data[0].lon}`);
    } catch (error) {
      console.error(error);
    }
  }
 
  getData();
 
  },[])
  return(
    <div>
     <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       {/* <LeafletGeocoder/> */}
       <LeafletRoutingMachine/>
     </MapContainer>

    <input type="text" className='input'/>
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
export default Maps;