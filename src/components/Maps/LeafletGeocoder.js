import React,{useEffect} from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const LeafletGeocoder = () => {
    const map=useMap();
    useEffect(()=>{
        L.Control.geocoder({
            defaultMarkGeocode: false,
          })
            .on('markgeocode', function(e) {
              var lat_lng=e.geocode.center;
              L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
             map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    }, [map]);

    return null
}

export default LeafletGeocoder