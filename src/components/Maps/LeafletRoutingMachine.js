import React, { useEffect ,useState} from 'react'
import L from 'leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import {useMap} from "react-leaflet";

const LeafletRoutingMachine = () => {
  const  map=useMap();
  const [data, setData] = useState(null);
  
  useEffect(()=>{
    L.Routing.control({
        waypoints:[L.latLng(13.00,77.55),L.latLng(location1,location2)],
        lineOptions:{
            color:"blue",
            weight:6,
        }
    }).addTo(map)
  
    },[]);
  
   var location1=12.9962056
   var location2=77.5091314;
    
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
  
  
}

export default LeafletRoutingMachine