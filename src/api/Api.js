import axios from 'axios';
//https://liooo.herokuapp.com
const Api = axios.create({
    baseURL: 'http://192.168.15.89:8000/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default Api;