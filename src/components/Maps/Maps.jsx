import React from 'react'
import "./Maps.css";
import L, { popup } from "leaflet";
import { MapContainer ,TileLayer,Popup,Marker, useMapEvents} from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletRoutingMachine from './LeafletRoutingMachine';
import LeafletGeocoder from './LeafletGeocoder';



const Maps = ({coordinates,setDistance}) => {
  const position = [12.9716, 77.5946];

  return(
    <div>
     <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
       <LeafletRoutingMachine coordinates={coordinates} setDistance={setDistance} />
       {/* <LeafletGeocoder/>  */}
       {/* <LocationFinderDummy/> */}
     </MapContainer>
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
