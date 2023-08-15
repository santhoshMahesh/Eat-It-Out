import axios from 'axios';


const URL='https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse';

  export const getPlacesData=async (latitude,longitude)=>{
    try {
      const {data} = await axios.get(URL,{
        params: {
            lat: latitude,
            lon: longitude,
          },
          headers: {
            'X-RapidAPI-Key': '6b23ea1377mshf187b95815b27f6p1551d2jsnf01c46eadd15',
            'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
          }
          });  
      return data.address;
    } catch (error) {
      console.error(error);
    }
    
  }


