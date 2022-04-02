import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const COIN_GECKO_URL = 'https://api.coingecko.com/api/v3/';

export default axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});

export const axiosExternal = axios.create({
    baseURL: COIN_GECKO_URL,
    headers: {'Content-Type': 'application/json'}
})
