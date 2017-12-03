import axios from 'axios';

const API_KEY ='5f05afb3d5ff864dfe7c2683e563ad6a';
const ROOT_URL= `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url=`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('URL: ', url);
    console.log('Request: ', request);

    return
         ({
           type: FETCH_WEATHER,
           payload: request
         });
}
