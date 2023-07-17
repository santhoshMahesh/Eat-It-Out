import React from 'react'
import { MapContainer ,TileLayer,Popup,Marker} from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "./Maps.css";
import L, { popup } from "leaflet";
import LeafletGeocoder from './LeafletGeocoder';
import LeafletRoutingMachine from './LeafletRoutingMachine';


const Maps = () => {
   const position = [12.9716, 77.5946]
        
   return(
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       {/* <LeafletGeocoder/> */}
       <LeafletRoutingMachine/>
     </MapContainer>
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