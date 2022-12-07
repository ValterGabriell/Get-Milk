import axios from 'axios';
const baseUrl = 'http://getmilk.bdsoft.com.br/getmilk/API/';
const baseUrl_teste = 'http://192.168.1.3:3000/';

const apiDevs = axios.create({
    baseURL: baseUrl
})

const apiTeste = axios.create({
    baseURL: baseUrl_teste
})

export default {apiDevs, apiTeste}