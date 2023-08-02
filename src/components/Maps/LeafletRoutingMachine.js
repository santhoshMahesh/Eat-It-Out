import React, { useEffect } from 'react'
import L from 'leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import {useMap} from "react-leaflet";

const LeafletRoutingMachine = () => {
  const  map=useMap();
  useEffect(()=>{
    L.Routing.control({
        waypoints:[L.latLng(13.00,77.55),L.latLng(12.97,77.59)],
        lineOptions:{
            color:"blue",
            weight:6,
        }
    }).addTo(map)
  
    },[]);
  
  
    
  return null
  
}

export default LeafletRoutingMachine