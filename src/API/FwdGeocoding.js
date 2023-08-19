import axios from 'axios';

const URL='https://forward-reverse-geocoding.p.rapidapi.com/v1/forward'


  export const getPositionAddress=async (street,city,state,postalcode,country)=>{
    try {
      const {data} = await axios.get(URL,{
        params: {
            street: street,
            city: city,
            state: state,
            postalcode: postalcode,
            country: country
          },
          headers: {
            'X-RapidAPI-Key': '6b23ea1377mshf187b95815b27f6p1551d2jsnf01c46eadd15',
            'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
          }
          });
      return data;
    } catch (error) {
      console.error(error);
    }
    
  }