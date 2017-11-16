import axios from "axios";

const API_KEY = "d18b1a7e6f8bc1d5108acbb3d9095930";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER"; 

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}