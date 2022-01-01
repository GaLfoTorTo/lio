import axios from 'axios';
//DESKTOP-8D86L9B
const Api = axios.create({
    baseURL: 'http://192.168.0.26:8000/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default Api;