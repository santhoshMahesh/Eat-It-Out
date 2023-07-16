import React from 'react'
import { MapContainer ,TileLayer,Popup,Marker} from 'react-leaflet'
import "./Maps.css";
import L from "leaflet";
const Maps = () => {
   const position = [12.9716, 77.5946]
        
   return(
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={position}>
         <Popup>
           A pretty CSS3 popup. <br /> Easily customizable.
         </Popup>
       </Marker>
     </MapContainer>
   )
}

let DefualtIcon=L.icon({
   iconUrl:"http://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
})

L.Marker.prototype.options.icon=DefualtIcon;
export default Maps;