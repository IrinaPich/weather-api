import axios from 'axios';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


router.get('/:countryName', (req, res) => {
    const { countryName } = req.params;
    // console.log(`Country: ${countryName}`);

    let capitalCity = axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
    capitalCity.then(response => {
    const capital=response.data[0].capital[0]

    console.log(`Captal: ${capital}`);
        // appid is an active API key 
        let cityWeather = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=ce5c5dfc1585e08f124cccb1ce5aa9c6`)
        cityWeather.then(response => {
        const weather=response.data
        // console.log(weather)
        res.send(response.data);

        })
     })

    .catch(error => console.error(error));            
 
});


export default router;