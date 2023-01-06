import axios from 'axios';
const baseUrl = 'http://getmilk.bdsoft.com.br/getmilk/API/';
const baseUrl_teste = 'http://192.168.1.5:19000/';

const apiDevs = axios.create({
    baseURL: baseUrl
})

const apiTeste = axios.create({
    baseURL: baseUrl_teste
})

export default {apiDevs, apiTeste}