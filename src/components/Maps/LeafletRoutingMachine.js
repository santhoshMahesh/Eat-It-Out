import React, { useEffect ,useState} from 'react'
import L from 'leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import {useMap} from "react-leaflet";

const LeafletRoutingMachine = ({coordinates,setDistance}) => {
  const  map=useMap();
  
  useEffect(()=>{
    const control=L.Routing.control({
      waypoints:[L.latLng(13.00,77.55),L.latLng(coordinates[0],coordinates[1])],
      lineOptions:{
        color:"blue",
        weight:6,
      }
    }).addTo(map)

    control.on('waypointschanged', function (e) {
      var waypoints = control.getWaypoints();
      if (waypoints.length > 2) {
        control.spliceWaypoints(2, waypoints.length - 2);
      }
    });
  
    control.on('routeselected', function (e) {
      const route = e.route;
      const distance = route.summary.totalDistance; // Get the total distance in meters
      setDistance(distance)
    });


  },[coordinates]);
  

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default LeafletRoutingMachine
