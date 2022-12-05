import axios from 'axios';
const baseUrl = 'http://getmilk.bdsoft.com.br/getmilk/API/';

const apiDevs = axios.create({
    baseURL: baseUrl
})

export default apiDevs