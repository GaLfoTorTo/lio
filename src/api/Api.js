import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://DESKTOP-8D86L9B:8000/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default Api;